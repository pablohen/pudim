import Document, { Html, Head, Main, NextScript } from 'next/document';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Uma homenagem a um dos sites mais antigos e leves do Brasil"
          />
          <DefaultSeo {...SEO} />
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
