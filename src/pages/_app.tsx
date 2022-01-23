import '../styles/global.css';

import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import FavoritesProvider from '../contexts/FavoritesContext';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import styles from './styles.module.scss';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
