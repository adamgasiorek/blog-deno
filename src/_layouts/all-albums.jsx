
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
       {/*<h3>Europe</h3>*/}
       {/*<section className="covers">*/}
       {/*    {content.filter((item) => item.group === 'Europe').map((country, i) => (*/}
       {/*        <comp.cover title={country.title} url={country.url}  thumbnail={country.thumbnail} key={i}/>*/}
       {/*    ))}*/}
       {/*</section>*/}

       <h3>Africa</h3>
       <section className="covers">
           {content.filter((item) => item.group === 'Africa').map((country, i) => (
               <comp.cover title={country.name} url={'countries/'+country.url} thumbnail={country.image} key={i}/>
           ))}
       </section>

       {/*<h3>Asia</h3>*/}
       {/*<section className="covers">*/}
       {/*    {content.filter((item) => item.group === 'Asia').map((country, i) => (*/}
       {/*        <comp.cover title={country.title} url={country.url} thumbnail={country.thumbnail} key={i}/>*/}
       {/*    ))}*/}
       {/*</section>*/}

       {/*<h3>North America</h3>*/}
       {/*<section className="covers">*/}
       {/*    {content.filter((item) => item.group === 'North America').map((country, i) => (*/}
       {/*        <comp.cover title={country.title} url={country.url} thumbnail={country.thumbnail} key={i}/>*/}
       {/*    ))}*/}
       {/*</section>*/}

       {/*<h3>South America</h3>*/}
       {/*<section className="covers">*/}
       {/*    {content.filter((item) => item.group === 'South America').map((country, i) => (*/}
       {/*        <comp.cover title={country.title} url={country.url} thumbnail={country.thumbnail} key={i}/>*/}
       {/*    ))}*/}
       {/*</section>*/}
   </section>

       <comp.footer />

   </body>
    </html>
);
