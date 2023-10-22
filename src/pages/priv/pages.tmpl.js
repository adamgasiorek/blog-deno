import getFolders from "../../helpers/get-folders.ts";

function sortBy(field) {
    return function(a, b) {
        return (a[field] > b[field]) - (a[field] < b[field])
    };
}

const getOrder = (url) => {
    if(url === 'historyczne') {
        return 1
    } else if(url === 'dziecinstwo') {
        return 2
    } else if(url === 'mlodzienstwo') {
        return 3
    } else if(url === 'doroslosc') {
        return 4
    } else {
        return 0;
    }
}

export default async function* () {
    const foldersPriv = await getFolders("priv/");

    yield {
        url: `/priv/index.html`,
        title: `Adam Gasiorek`,
        layout: "./../../_layouts/priv.jsx",
        content: [
            ...foldersPriv.map(item => ({
                ...item,
                sort: getOrder(item.url)
            })).sort(sortBy('sort'))
        ]
    };

}
