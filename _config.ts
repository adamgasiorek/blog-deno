import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import basicAuth from "https:/deno.land/x/lume/middlewares/basic_auth.ts";
import "https://deno.land/std@0.201.0/dotenv/load.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
    // server: {
    //     middlewares: [
    //         basicAuth(),
    //     ],
    //     port: 8000,
    // },
});

site.use(jsx());
site.use(postcss());

export default site;

//.split('\n').map((item) => ({title: item.split('.')[0], content: item.split('.')[0], album: 'europe/austria/salzburg' }))
