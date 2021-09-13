import Head from 'next/head'
import Header from '../components/Header'
import Posts from '../components/Posts'
import styles from '../styles/Home.module.scss'
import { useSelector } from 'react-redux'
export default function Home() {
  const background = useSelector((state) => state.background.value)
  return (
    <div className={styles.homeContainer} >
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content} style={{backgroundColor: background}} >
        <Posts />

      </div>
    </div>
  )
}
