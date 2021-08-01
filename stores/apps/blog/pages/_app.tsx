import './styles.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '@stores/header';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Head>
        <title data-test="greeting">Welcome to blog!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to blog!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
