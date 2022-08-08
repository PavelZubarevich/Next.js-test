import styles from '../../../styles/Button.module.scss'

const Button = ({ text }) => {
  return (
    <button type='button' className={styles.button}>{text}</button>
  )
}

export default Button