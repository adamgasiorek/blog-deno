import getFolders from "../../helpers/get-folders.ts";

export default async function* () {
    const foldersAfrica = await getFolders("africa/");
    const foldersEurope = await getFolders("europe/");
    const foldersAsia = await getFolders("asia/");
    const foldersNA = await getFolders("north-america/");
    const foldersSA = await getFolders("south-america/");


    yield {
        url: `/albums/index.html`,
        title: `All albums`,
        layout: "./../../_layouts/all-albums.jsx",
        content: [
            ...foldersAfrica.map(item => ({...item, group: 'Africa'})),
            ...foldersEurope.map(item => ({...item, group: 'Europe'})),
            ...foldersAsia.map(item => ({...item, group: 'Asia'})),
            ...foldersNA.map(item => ({...item, group: 'North America'})),
            ...foldersSA.map(item => ({...item, group: 'South America'})),
        ]
    };

}
