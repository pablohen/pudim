import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Pudim</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
