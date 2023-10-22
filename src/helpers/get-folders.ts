import firebase from 'npm:firebase-admin';
import { initializeApp } from "npm:firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll, getMetadata } from "npm:firebase/storage";



import decode from "https://deno.land/x/wasm_image_decoder@v0.0.7/mod.js";
import getImages from "./get-images.ts";


const firebaseConfig = JSON.parse(Deno.env.get("ACCOUNT_KEY"));
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);


export default async function getFolders(url) {
    const list = await listAll(ref(storage, url));
    const folders = await Promise.all(list.prefixes.map(async (item) => {
        const path = url + item.name;
        const imagesData = await listAll(ref(storage, path));
        const images = imagesData.items.filter(item => !item.name.includes('.DS_Store') && item.name.includes('thumb-'));
        let mainImage = '';
        let mainImageThumbnail = '';

        if(images.length > 0) {
            const sortedValues = images.sort((a, b) => b.name.startsWith('main') - a.name.startsWith('main'));
            const imageURL = await getDownloadURL(sortedValues[0]);
            mainImage = imageURL;
            mainImageThumbnail = mainImage;
        } else {
            const list = await listAll(ref(storage, path));
            const folderNested = await Promise.all(list.prefixes.map(async (item) => item.name));
            const pathNested = url + item.name + '/' + folderNested[0];
            const imagesData = await listAll(ref(storage, pathNested));
            const imagesNested = imagesData.items.filter(item => !item.name.includes('.DS_Store') && item.name.includes('thumb-'));
            const sortedValues = imagesNested.sort((a, b) => b.name.startsWith('main') - a.name.startsWith('main'));
            const imageURL = await getDownloadURL(sortedValues[0]);
            mainImage = imageURL;
            mainImageThumbnail = mainImage;
        }

        const fullName = item.name.charAt(0).toUpperCase() + (item.name.slice(1).replaceAll("_", " "));

        return {name: fullName, url: item.name, image: mainImage, thumbnail: mainImageThumbnail};
    }));

    folders.sort((a, b) => {
        const dateA = new Date(a.name.split(' ')[0]);
        const dateB = new Date(b.name.split(' ')[0]);

        if (dateA < dateB) return 1;
        if (dateA > dateB) return -1;
        return 0;
    })

    return folders;
}
