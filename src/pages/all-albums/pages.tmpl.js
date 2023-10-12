import getFolders from "../../helpers/get-folders.ts";

export default async function* () {
    const foldersAfrica = await getFolders("africa/");
    const foldersEurope = await getFolders("europe/");


    yield {
        url: `/albums/index.html`,
        title: `All albums`,
        layout: "./../../_layouts/all-albums.jsx",
        content: [
            ...foldersAfrica.map(item => ({...item, group: 'Africa'})),
            ...foldersEurope.map(item => ({...item, group: 'Europe'})),
        ]
    };

}
