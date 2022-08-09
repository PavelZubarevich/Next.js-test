import ProductCard from "../common/ProductCard"
import styles from '../../styles/ProductList.module.scss'

const ProductList = ({ products, loading }) => {
  return (
    <>
      {!loading ? (
        <ul className={styles.productList}>
          {products && products.map(product => (
            <li key={product.id} className={styles.productList__item}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>)
        : (<div className={styles.ldsDualRing}></div>)}
    </>
  )


}

export default ProductList