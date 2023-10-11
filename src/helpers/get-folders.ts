import * as firebase from "https://esm.sh/firebase@10.3.1/app";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, getMetadata } from "https://esm.sh/firebase@10.3.1/storage";
import decode from "https://deno.land/x/wasm_image_decoder@v0.0.7/mod.js";

const firebaseConfig = JSON.parse(Deno.env.get("ACCOUNT_KEY"));
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage();


export default async function getFolders(url) {
    const storageRef = ref(storage, url);

    const list = await listAll(storageRef);
    const folders = await Promise.all(list.prefixes.map(async (item) => {
        const storageRefNested = ref(storage, url + item.name);
        const listNested = await listAll(storageRefNested);
        let main = '';
        const mainItem = listNested.items.filter(item => item.name.includes('main'))[0];
        if(mainItem) {
            main = await getDownloadURL(ref(mainItem));
        }

        const fullName = item.name.charAt(0).toUpperCase() + (item.name.slice(1).replaceAll("_", " "));

        return {name: fullName, url: item.name, image: main};
    }));

    return folders;
}
