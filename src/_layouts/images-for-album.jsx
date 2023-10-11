
export default ({ title, content, comp}, filters) => (
    <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />

        <title>{title}</title>
        <link rel="stylesheet" href="/styles/styles.css" />
    </head>
   <body>
   <section className="container">
       <comp.header />

       <h1>{title}</h1>

       <comp.gallery images={content}/>

   </section>
       <comp.footer />
       <script src="/components.js" type="text/javascript"></script>
   </body>
    </html>
);
