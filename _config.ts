import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import basicAuth from "https:/deno.land/x/lume/middlewares/basic_auth.ts";
import "https://deno.land/std@0.201.0/dotenv/load.ts";
import postcss from "lume/plugins/postcss.ts";
import metas from "lume/plugins/metas.ts";

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

site.copy('./assets/main.js', "main.js");
site.copy('./assets/favicon.ico', "assets/favicon.ico");
site.copy('./assets/logo.png', "assets/logo.png");
site.copy('./assets/me.jpeg', "assets/me.jpeg");
site.copy('./assets/scripts', "scripts");

site.use(metas());

export default site;

//.split('\n').map((item) => ({title: item.split('.')[0], content: item.split('.')[0], album: 'europe/austria/salzburg' }))
