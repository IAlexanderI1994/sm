import cn from 'clsx'

import styles from './FreeLessonButton.module.scss'

interface IProps {
  className?: string
}

const FreeLessonButton = ({ className }: IProps) => {
  const currentClassName = cn(styles.root, className)
  return (
    <a href="#popup:free-lesson" className={currentClassName}>
      Бесплатное занятие
    </a>
  )
}

export default FreeLessonButton
