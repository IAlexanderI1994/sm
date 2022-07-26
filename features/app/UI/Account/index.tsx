import cn from 'clsx'

import Advantages from './Advantages'
import FreeLessonButton from '../../../../shared/components/FreeLessonButton'

import styles from './Account.module.scss'

const Account = () => {
  const wrapper = cn('wrapper', styles.wrapper)
  return (
    <div className={styles.root}>
      <div className={wrapper}>
        <h2 className={styles.title}>Личный кабинет ребёнка</h2>
        <Advantages />
        <FreeLessonButton className={styles.freeLesson} />
      </div>
    </div>
  )
}

export default Account
