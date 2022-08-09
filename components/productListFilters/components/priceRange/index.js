import styles from '../../../../styles/PriceRange.module.scss'

const PriceRange = ({ prices, setPrices, minPrice, maxPrice }) => {

  const setMinPrice = (e) => {
    setPrices(prices => {
      return {
        min: e.target.value,
        max: prices.max
      }
    })
  }

  const setMaxPrice = (e) => {
    setPrices(prices => {
      return {
        max: e.target.value,
        min: prices.min
      }
    })
  }

  return (
    <div className={styles.priceRange}>
      <input type="number" value={prices.min} onChange={setMinPrice} placeholder={minPrice} />
      <span className={styles.priceRange__separator} />
      <input type="number" value={prices.max} onChange={setMaxPrice} placeholder={maxPrice} />
    </div>

  )
}

export default PriceRange