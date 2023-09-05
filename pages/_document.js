import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Add the favicon link element */}
                    <link rel="icon" href="/assets/images/banner/bp-only-symbol.png" />

                    {/* Any other head elements you need */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                (function(d, s, id, w, f){
                    w[f] = w[f] || function() {
                        (w[f].q = w[f].q || []).push(arguments)
                    };
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)){ return; }
                    js = d.createElement(s); js.id = id;
                    js.onload = function(){
                        document.dispatchEvent(new Event('tbScriptLoaded'));
                    };
                    js.async = true;
                    js.src = "https://cdn.trackboxx.info/p/tracker.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'trackboxx-script', window, 'trackboxx'));
                trackboxx('set', 'siteId', 'TB-88285652');
                trackboxx('trackPageview');
              `,
                    }}
                />
            </Html>
        );
    }
}

export default MyDocument;



