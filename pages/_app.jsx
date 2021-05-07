import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Pudim</title>
      <DefaultSeo {...SEO} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
