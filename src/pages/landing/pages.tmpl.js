import getImages from "../../helpers/get-images.ts";
import getFolders from "../../helpers/get-folders.ts";

export const layout = "./../../_layouts/landing.jsx";

export default async function* () {
    const name = "africa/";
    const folders = await getFolders(name);

    yield {
        url: `/`,
        title: `Adam Gasiorek`,
        content: folders.map(item => ({...item, group: 'Africa'}))
    };

}
