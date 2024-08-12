import Head from 'next/head';
import '@/styles/globals.css'; // Import global styles
import { LanguageProvider } from '../contexts/LanguageContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mulish" />
      </Head>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}
