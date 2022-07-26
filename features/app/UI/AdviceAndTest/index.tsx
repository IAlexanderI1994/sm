import cn from 'clsx'

import styles from './AdviceAndTest.module.scss'

const AdviceAndTest = () => {
  const wrapper = cn('wrapper', styles.wrapper)
  const root = cn('trim', styles.root)
  return (
    <section className={root}>
      <div className={wrapper}>
        <div className={styles.contentAbout}>
          <h4 className={styles.title}>Сможет ли Ваш ребёнок заниматься футболом профессионально?</h4>
          <p className={styles.text}>
            Пройдите тест и получите рекомендации к тренировкам для Вашего ребенка + одно бесплатное занятие в футбольной школе Спартак.
            Длительность теста 1 минута
          </p>
          <a href="#popup:free-lesson" className={styles.buttonModal}>
            Пройти тест
          </a>
        </div>
        <div className={styles.contentBanner}>
          <img className={styles.contentBannerImg} src="/images/AdviceImage.png" alt="advice image" />
        </div>
      </div>
    </section>
  )
}

export default AdviceAndTest
