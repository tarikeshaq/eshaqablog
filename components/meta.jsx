import Head from 'next/head'
export default () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
        </Head>
        <style jsx global>{`
      body, html, #__next {
        height: 100%;
        margin: 0;
        padding: 0;
        background-image: url("/static/images/background.jpg");
        background-size:     cover;                      /* <------ */
    background-position: center center;   
    font-family: 'Raleway', sans-serif;
 
    }
    `}</style>
    </div>
)