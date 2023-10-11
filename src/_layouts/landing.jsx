export default ({ title, content, comp}, filters) => (
    <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title}</title>
        <link rel="stylesheet" href="/styles/styles.css" />
    </head>
   <body>


   <h3>Africa</h3>
   <section className="covers">
       {content.filter((item) => item.group === 'Africa').map((country, i) => (
           <comp.cover title={country.name} url={country.url} thumbnail={country.image} key={i}/>
       ))}
   </section>
   {/*<section className="container">*/}
   {/*    <comp.gallery images={content}/>*/}
   {/*</section>*/}

   {/*<script src="/components.js" type="text/javascript"></script>*/}

   </body>
    </html>
);
