export const layout = "./../../_layouts/about.jsx";

export default function* ({ search }) {


    yield {
        url: `/about/index.html`,
        title: `About`,
        content: " "
    };

}
