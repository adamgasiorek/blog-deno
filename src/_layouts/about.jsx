
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

       <div className="wrapper-about">
           <div className="container">
               <h2 >Hello! I'm Adam.</h2>
               <div className="body2">
                   I come from southern Poland, but my place in the world is changing like in a kaleidoscope. I focus on getting to know new experiences and discovering the world from every angle: from philosophy, quantum physics, learning dance and foreign languages, to learning about the local culture while traveling. Whenever I am not traveling, I am busy implementing my own idea in business. I have created this blog for three reasons: for sharing my best travel photographies, for fulfilling my travel-dreams (sharing best memories) and to use this website as my professional technical portfolio.
               </div>
               <div className="buttons">
                   <a href="visited">Visited countries</a>
               </div>
           </div>
           <div className="images2">

               <div className="img1"></div>
               <div className="img2"></div>
               <div className="img3"></div>
           </div>
       </div>
       {/*<world-map list="['RU','PL','CN']"></world-map>*/}
       {/*<world-legend-map list="['RU','PL','CN']"></world-legend-map>*/}
   </section>
       <comp.footer />

       <script src="/components.js" type="text/javascript"></script>
   </body>
    </html>
);
