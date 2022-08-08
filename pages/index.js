import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home({ products, filters }) {
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

export async function getStaticProps() {

  let url = 'https://getlens-master.stage.dev.family/api/pages/obektivy';
  let username = 'admin';
  let password = 'Wj3g4W';

  let headers = new Headers();

  headers.append('Authorization', 'Basic ' + new Buffer(username + ':' + password).toString('base64'));

  const res = await fetch(url, {
    method: 'GET',
    headers: headers
  })

  const data = await res.json();

  return {
    props: { products: data.products, filters: data.filters },
  }
}
