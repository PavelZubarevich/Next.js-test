import Image from 'next/image'
import Link from 'next/link'
import { newLabel, addToCart } from '../../../locale/ru'
import styles from '../../../styles/ProductCard.module.scss'
import Button from '../Button'
import NewBadge from '../newBadge';
import Heart from '../../../assets/icons/heart'

const ProductCard = ({ product }) => {

  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__badges}>
        {product.is_new || <NewBadge />}
      </div>
      <div className={styles.productCard__image}>
        <Image
          src={
            product.image.desktop.webp_x1
          }
          width="240"
          height="240"
          layout="responsive"
          alt="Picture of the product"
        />
      </div>
      <div className={styles.productCard__content}>
        <Link href={`/product/${product.id}`}>
          <a className={styles.productCard__title}>{product.title}</a>
        </Link>
        <div>
          <div className={styles.productCard__info}>
            <p className={styles.productCard__price}>{product.price} ₽</p>
            <p className={styles.productCard__newLabel}>{product.is_new || newLabel}</p>
          </div>
          <div className={styles.productCard__buttons}>
            <Button text={addToCart} />
            <Heart />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductCard