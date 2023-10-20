// import getImages from "../../helpers/get-images.ts";
// import getFolders from "../../helpers/get-folders.ts";

export default async function* () {
    // const name = "main/";
    // const images = await getImages(name);

    yield {
        url: `/priv/index.html`,
        title: `Adam Gasiorek`,
        layout: "./../../_layouts/priv.jsx",
        content: []
    };

}
