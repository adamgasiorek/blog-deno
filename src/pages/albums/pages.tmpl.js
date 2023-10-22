import getImages from "../../helpers/get-images.ts";
import getFolders from "../../helpers/get-folders.ts";

export default async function* () {

    const names = [
        "priv/",
    ]

    for (const name of names) {
        const folders = await getFolders(name);
        for (const folder of folders) {
            const folderNested = await getFolders(name + folder.url + '/');

            if(folderNested.length === 0) {
                const images = await getImages(name + folder.url);

                yield {
                    url: `/priv/albums/${folder.url}/index.html`,
                    title: folder.name,
                    layout: "./../../_layouts/images-for-album.jsx",
                    content: images
                };
            } else {
                yield {
                    url: `/priv/albums/${folder.url}/index.html`,
                    title: folder.name,
                    layout: "./../../_layouts/countries-albums.jsx",
                    content: folderNested
                };

                for (const folderNested2 of folderNested) {
                    const images = await getImages(name + folder.url + '/' + folderNested2.url);

                    yield {
                        url: `/priv/albums/${folder.url}/${folderNested2.url}/index.html`,
                        title: folderNested2.name,
                        layout: "./../../_layouts/images-for-album.jsx",
                        content: images
                    };
                }
            }
        }
    }

}
