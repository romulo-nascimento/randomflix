import '../styles/global.css';

import Head from 'next/head';
import { AppProps } from 'next/app';

import FavoritesProvider from '../contexts/FavoritesContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import styles from './styles.module.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Random Sheldon</title>
      </Head>
      <FavoritesProvider>
        <div className={`grid max-h-screen ${styles['home']}`}>
          <header className={styles['home__header']}>
            <Header />
          </header>
          <main className={styles['home__main']}>
            <Component {...pageProps} />
          </main>
          <aside className={styles['home__aside']}>
            <Sidebar />
          </aside>
        </div>
      </FavoritesProvider>
    </>
  );
}

export default App;
