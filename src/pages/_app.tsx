import '../styles/global.css'

import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import styles from './styles.module.scss'
import FavoritesProvider from '../contexts/FavoritesContext'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Random Sheldon</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <FavoritesProvider>
            <Header />
            <Component {...pageProps} />
          </FavoritesProvider>
        </div>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
      </div>
    </QueryClientProvider>
  )
  
}

export default App
