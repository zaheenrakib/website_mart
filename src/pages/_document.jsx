import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/assets/images/UMCL_logo.png" />
        <link
          rel="shortcut icon"
          type="image/ico"
          href="/assets/images/UMCL_logo.png"
        />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        {/* <link rel="stylesheet" href="assets/css/swiper-bundle.css" /> */}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/1.2.21/css/lightgallery.min.css" /> */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
