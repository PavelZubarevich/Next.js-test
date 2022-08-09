import styles from '../../../styles/Checkbox.module.scss'
import CheckIcon from '../../../assets/icons/checkIcon'

const Checkbox = ({ value, setValue, label }) => {
  return (
    <>
      <label className={styles.checkbox}>
        <input type="checkbox" className={styles.checkbox__input} checked={value} onChange={(e) => { setValue(e.target.checked) }} />
        <span className={styles.checkbox__icon}>
          {value && <CheckIcon />}
        </span>
        {label}
      </label>
    </>

  )
}

export default Checkbox
