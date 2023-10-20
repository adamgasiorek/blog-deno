
export default ({ title, content, comp}, filters) => (
    <html lang="en">
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />

        <title>{title}</title>
        <link rel="stylesheet" href="/styles/styles.css" />

        <script src="/assets/main.js" type="text/javascript"></script>
    </head>
   <body>
   <section className="container">
       <comp.header />

       <world-map list={content}></world-map>
       <world-legend-map list={content}></world-legend-map>

   </section>
       <comp.footer />

       <script src="/components.js" type="text/javascript"></script>
   </body>
    </html>
);
