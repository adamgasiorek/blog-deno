import decode from "https://deno.land/x/wasm_image_decoder@v0.0.7/mod.js";

import firebase from 'npm:firebase-admin';
import { initializeApp } from "npm:firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, getMetadata } from "npm:firebase/storage";


const firebaseConfig = JSON.parse(Deno.env.get("ACCOUNT_KEY"));
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);


async function getSize(url) {
    let input = await fetch(url, {referrer:""}).then(r => r.arrayBuffer());
    let result = decode(input);

    return result.width / result.height < 0.9;
}

export default async function getImages(url) {
    const storageRef = ref(storage, url);

    const list = await listAll(storageRef);
    const filteredList = list.items.filter( (item) => !item.name.includes('thumb-') && !item.name.includes('.DS_Store') )

    const images = await Promise.all(filteredList
        .map(async (item) => {
            const meta = await getMetadata(item);
        const isVideo = meta.contentType === "video/mp4" || meta.contentType === "video/quicktime";
        const path = await getDownloadURL(item);
            const splittedPath = path.split("%2F");
        let thumbnail = '';
        if(splittedPath.length === 2) {
            thumbnail = splittedPath[0] + '%2Fthumb-' + splittedPath[1];
        } else if(splittedPath.length === 3) {
            thumbnail = splittedPath[0] + '%2F' + splittedPath[1] + `%2Fthumb-${splittedPath[2]}`;
        } else if(splittedPath.length === 4) {
            thumbnail = splittedPath[0] + '%2F' + splittedPath[1] + '%2F' + splittedPath[2] + `%2Fthumb-${splittedPath[3]}`;
        }

        let isTall = false;
        if(!isVideo) {
            isTall = await getSize(thumbnail);
        }
        return {path, isVideo, isTall, thumbnail};
    }));

    return images;
}
