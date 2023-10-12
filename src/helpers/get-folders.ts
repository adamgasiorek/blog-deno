import * as firebase from "https://esm.sh/firebase@10.3.1/app";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, getMetadata } from "https://esm.sh/firebase@10.3.1/storage";
import decode from "https://deno.land/x/wasm_image_decoder@v0.0.7/mod.js";
import getImages from "./get-images.ts";

const firebaseConfig = JSON.parse(Deno.env.get("ACCOUNT_KEY"));
const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage();


export default async function getFolders(url) {
    const list = await listAll(ref(storage, url));
    const folders = await Promise.all(list.prefixes.slice(0,2).map(async (item) => {
        const path = url + item.name;
        const images = await getImages(path);
        let mainImage = '';
        let mainImageThumbnail = '';

        if(images.length > 0) {
            mainImage = (images.filter(image => image.path.includes('main'))[0]?.path ?? "");
            const splittedPath = mainImage.split("%2F");
            let thumbnail = '';
            if(splittedPath.length === 2) {
                thumbnail = splittedPath[0] + '%2Fthumb-' + splittedPath[1];
            } else if(splittedPath.length === 3) {
                thumbnail = splittedPath[0] + '%2F' + splittedPath[1] + `%2Fthumb-${splittedPath[2]}`;
            } else if(splittedPath.length === 4) {
                thumbnail = splittedPath[0] + '%2F' + splittedPath[1] + '%2F' + splittedPath[2] + `%2Fthumb-${splittedPath[3]}`;
            }
            mainImageThumbnail = thumbnail;
        } else {

            const list = await listAll(ref(storage, path));
            const folderNested = await Promise.all(list.prefixes.map(async (item) => item.name));
            const pathNested = url + item.name + '/' + folderNested[0];
            const imagesNested = await getImages(pathNested);

            mainImage = (imagesNested.filter(image => image.path.includes('main'))[0]?.path ?? "");
            const splittedPath = mainImage.split("%2F");
            let thumbnail = '';
            if(splittedPath.length === 2) {
                thumbnail = splittedPath[0] + '%2Fthumb-' + splittedPath[1];
            } else if(splittedPath.length === 3) {
                thumbnail = splittedPath[0] + '%2F' + splittedPath[1] + `%2Fthumb-${splittedPath[2]}`;
            } else if(splittedPath.length === 4) {
                thumbnail = splittedPath[0] + '%2F' + splittedPath[1] + '%2F' + splittedPath[2] + `%2Fthumb-${splittedPath[3]}`;
            }
            mainImageThumbnail = thumbnail;
        }

        const fullName = item.name.charAt(0).toUpperCase() + (item.name.slice(1).replaceAll("_", " "));

        return {name: fullName, url: item.name, image: mainImage, thumbnail: mainImageThumbnail};
    }));


    return folders;
}
