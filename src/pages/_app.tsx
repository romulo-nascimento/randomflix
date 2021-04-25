import '../styles/global.scss'

import Head from 'next/head'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

import styles from './styles.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Random Sheldon</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          <Component {...pageProps} />
        </div>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
      </div>
    </>
  )
  
}

export default MyApp
