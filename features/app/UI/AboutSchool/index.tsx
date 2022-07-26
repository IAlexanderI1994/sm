import cn from 'clsx'
import FreeLessonButton from 'shared/components/FreeLessonButton'
import styles from './AboutSchool.module.scss'

const AboutSchool = () => {
  const wrapper = cn('wrapper', styles.wrapper)
  const root = cn('trim', styles.root)
  return (
    <section className={root}>
      <div className={wrapper}>
        <div className={styles.content}>
          <h3 className={styles.title}>Футбольная школа</h3>
          <img className={styles.image} src="/images/SchoolName.svg" alt="Спартак Юниор" />
          <h4 className={styles.subTitle}>Официальная сеть школ ФК «Спартак-Москва» Набор детей от 4 лет!</h4>
          <FreeLessonButton className={styles.freeLesson} />
        </div>
      </div>
    </section>
  )
}

export default AboutSchool
