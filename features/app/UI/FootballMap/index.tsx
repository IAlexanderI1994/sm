import styles from './FootballMap.module.scss'

const FootballMap = () => {
  return (
    <section className={styles.root}>
      <div className="wrapper">
        <img className={styles.map} src="/images/Map.png" alt="football-map" />
      </div>
    </section>
  )
}

export default FootballMap
