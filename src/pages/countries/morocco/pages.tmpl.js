import getImages from "../../../helpers/get-images.ts";

export const layout = "./../../../_layouts/images-for-album.jsx";

export default async function* () {

    const name = "africa/morocco";
    const images = await getImages(name);

    yield {
        url: `/albums/countries/morocco/index.html`,
        title: `Morocco`,
        content: images
    };

}
