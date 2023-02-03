import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);    
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="web developer, designer, hire dev, hire a front end developer, create website, how to make a website, clean design, web design, freelancer, need wordpress website"
          />
          <meta
            name="description"
            content="I'm a freelance/junior web developer open for work, this is my web portfolio where I showcases some of the works I have done as a junior web developer as a freelance and at my school NAIT(Northern Alberta Institute of Technology)."
          />
          <meta name="author" content="Russell JohnJavier" />
          <link rel="shortcut icon" href="/images/favicon.ico" />
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
