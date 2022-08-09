import styles from '../../styles/ProductListFilters.module.scss'
import Checkbox from '../common/checkbox'
import { useEffect, useState, useRef } from 'react'
import PriceRange from './components/priceRange'
import { productsLabel } from '../../locale/ru'
import { debounce } from 'lodash'

const ProductListFilters = ({ filters, addFilters, removeFilter, metaData }) => {

  const [prices, setPrices] = useState({ min: '', max: '' })

  const addPricesFilters = (prices) => {
    const param = {}

    if (prices.min) {
      console.log(321);
      param["price[min]"] = prices.min
    } else {
      removeFilter("price[min]")
    }

    if (prices.max) {
      console.log(3211)
      param["price[max]"] = prices.max
    } else {
      removeFilter("price[max]")
    }

    addFilters(param)
  }

  const debouncedAddPricesFilters = useRef(
    debounce((prices) => {
      addPricesFilters(prices)
    }, 300)
  ).current;

  useEffect(() => {
    debouncedAddPricesFilters(prices)
  }, [prices])

  const onChange = (e, filter, item) => {
    const param = {}
    if (e.target.checked) {
      param[filter.slug + '[]'] = item?.value || 0
    } else {
      removeFilter(filter.slug + '[]')
    }
    addFilters(param)
  }

  return (
    <div className={styles.productListFilters}>
      <p className={styles.productListFilters__totalProducts}>{productsLabel + " " + metaData?.total}</p>
      <p className={styles.productListFilters__category}>Кaмеры</p>
      {filters?.map(filter => (
        <div className={styles.productListFilters__filter} key={filter.slug}>
          <p className={styles.productListFilters__filterName}>{filter.title}</p>
          {filter.type === 'range' && (
            <PriceRange prices={prices} setPrices={setPrices} minPrice={filter.min} maxPrice={filter.max} />
          )
          }
          {filter.type === 'checkbox' && (
            <div className={styles.productListFilters__checkbox}>
              <Checkbox label={filter.title} onChange={(e) => onChange(e, filter)} checked={false} />
            </div>
          )}
          {filter.type === 'multiple' && filter.items.map(item => (
            <div className={styles.productListFilters__checkbox} key={item.title}>
              <Checkbox label={item.title} onChange={(e) => onChange(e, filter, item)} checked={false} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ProductListFilters
