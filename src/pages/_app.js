import { LanguageProvider } from '../contexts/LanguageContext';
import { UserProvider } from '../contexts/UserContext';

import Head from 'next/head';

import '@/styles/globals.css'; // Import global styles


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mulish" />
      </Head>
      <LanguageProvider>
        <UserProvider>
        <Component {...pageProps} />
        </UserProvider>
      </LanguageProvider>
    </>
  );
}
