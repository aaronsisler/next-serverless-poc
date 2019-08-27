import Document, { Html, Head, Main, NextScript } from "next/document";
// import img from "../static/images/favicon.ico";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* <link rel="icon" type="image/x-icon" href={img} /> */}
          {/* <link
            rel="icon"
            type="image/x-icon"
            href="./static/images/favicon.ico"
          /> */}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
