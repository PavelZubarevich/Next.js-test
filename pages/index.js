import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Task</title>
        <meta name="description" content="Test task description" />
        <meta name="keywords" content="Test, task, PLP, listing"></meta>
      </Head>

      <main className={styles.main}>
      </main>
    </div>
  )
}
