import getImages from "../../helpers/get-images.ts";
import getFolders from "../../helpers/get-folders.ts";

export const layout = "./../../_layouts/landing.jsx";

export default async function* () {


    // const images = await getImages('urodziny');
    const folders = await getFolders('');

    console.log(folders);

    yield {
        url: `/`,
        title: `Adam Gasiorek`,
        content: folders
    };

}
