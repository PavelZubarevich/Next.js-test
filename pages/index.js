import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ProductList from '../components/productList'
import ProductListFilters from '../components/productListFilters'
import { useState } from 'react'

export default function Home({ initialProducts, initialFilters, initialMeta }) {

  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState(initialFilters)
  const [meta, setMeta] = useState(initialMeta)
  const [loading, setLoading] = useState(false)

  const removeFilter = (param) => {
    const urlParams = Object.fromEntries(new URL(location).searchParams)

    const filtredParams = Object.keys(urlParams)
      .filter(key => key !== param)
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: urlParams[key]
        })
      }, {})

    const searchParams = new URLSearchParams(filtredParams);
    history.pushState(null, document.title, `${location.pathname}?${searchParams.toString()}`)
  }


  const addFilters = async (param) => {
    setLoading(true)

    const urlParams = Object.fromEntries(new URL(location).searchParams)
    const searchParams = new URLSearchParams({ ...urlParams, ...param });

    history.pushState(null, document.title, `${location.pathname}?${searchParams.toString()}`)

    let url = `https://getlens-master.stage.dev.family/api/pages/obektivy?${searchParams.toString()}`;
    let username = 'admin';
    let password = 'Wj3g4W';

    console.log(123, url);
    let headers = new Headers();

    headers.append('Authorization', 'Basic ' + new Buffer(username + ':' + password).toString('base64'));

    fetch(url, {
      method: 'GET',
      headers: headers
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
        setFilters(data.filters)
        setMeta(data.meta)
        setLoading(false)
      })

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Test Task</title>
        <meta name="description" content="Test task description" />
        <meta name="keywords" content="Test, task, PLP, listing"></meta>
      </Head>

      <main className={styles.main}>
        <ProductListFilters filters={filters} addFilters={addFilters} removeFilter={removeFilter} metaData={meta} />
        <ProductList products={products} loading={loading} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {


  const searchParams = new URLSearchParams(context.query);
  const url = `https://getlens-master.stage.dev.family/api/pages/obektivy?${searchParams.toString()}`;
  const username = 'admin';
  const password = 'Wj3g4W';

  const headers = new Headers();
  headers.append('Authorization', 'Basic ' + new Buffer(username + ':' + password).toString('base64'));

  const res = await fetch(url, {
    method: 'GET',
    headers: headers
  })

  const data = await res.json();

  return {
    props: { initialProducts: data.products, initialFilters: data.filters, initialMeta: data.meta },
  }
}
