import getFolders from "../../helpers/get-folders.ts";

export const layout = "./../../_layouts/all-albums.jsx";


export default async function* () {
    const name = "africa/";
    const folders = await getFolders(name);

    yield {
        url: `/albums/index.html`,
        title: `All albums`,
        content: folders.map(item => ({...item, group: 'Africa'}))
    };

}
