import * as firebase from "https://esm.sh/firebase@10.3.1/app";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, getMetadata } from "https://esm.sh/firebase@10.3.1/storage";
import decode from "https://deno.land/x/wasm_image_decoder@v0.0.7/mod.js";

const firebaseConfig = JSON.parse(Deno.env.get("ACCOUNT_KEY"));
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage();

async function getSize(url) {
    let input = await fetch(url, {referrer:""}).then(r => r.arrayBuffer());
    let result = decode(input);

    return result.width / result.height < 0.9;
}

export default async function getImages(url) {
    const storageRef = ref(storage, 'albums/'+url);

    const list = await listAll(storageRef);
    const images = await Promise.all(list.items.map(async (item) => {
        const meta = await getMetadata(item);
        const isVideo = meta.contentType === "video/mp4" || meta.contentType === "video/quicktime";
        const path = await getDownloadURL(item);
        let isTall = false;
        if(!isVideo) {
            isTall = await getSize(path);
        }
        return {path, isVideo, isTall};
    }));

    return images;
}
