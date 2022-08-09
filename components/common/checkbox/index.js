import styles from '../../../styles/Checkbox.module.scss'
import CheckIcon from '../../../assets/icons/checkIcon'
import { useState } from 'react'

const Checkbox = ({ onChange, label, checked }) => {

  const [state, setState] = useState(checked)

  const onCheckboxChange = (e) => {
    setState(e.target.checked)
    onChange(e)
  }

  return (
    <>
      <label className={styles.checkbox}>
        <input type="checkbox" name={label} className={styles.checkbox__input} checked={state} onChange={onCheckboxChange} />
        <span className={styles.checkbox__icon}>
          {state && <CheckIcon />}
        </span>
        {label}
      </label>
    </>

  )
}

export default Checkbox
