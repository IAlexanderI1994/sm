import styles from './Phone.module.scss'

const Phone = () => {
  return (
    <div className={styles.root}>
      <a className={styles.phone} href="tel:+74958773115">
        +7 (495) 877-31-15
      </a>
    </div>
  )
}

export default Phone
