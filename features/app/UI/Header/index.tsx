import { useState, useEffect } from 'react'
import cn from 'clsx'

import Logo from './components/Logo'
import styles from './Header.module.scss'
import Menu from './components/Menu'
import Phone from './components/Phone'
import FreeLessonButton from 'shared/components/FreeLessonButton'

const Header = () => {
  const wrapper = cn('wrapper', styles.wrapper)

  const [isFixed, setIsFixed] = useState<boolean>(false)

  const header = cn(styles.root, {
    [styles.root_fixed]: isFixed
  })

  useEffect(() => {
    const showHeader = () => {
      if (window.scrollY > 100) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', showHeader)
    return () => window.removeEventListener('scroll', showHeader)
  }, [])

  return (
    <>
      {isFixed && <div className={styles.fixed} />}
      <header id="header" className={header}>
        <div className={wrapper}>
          <Logo isFixed={isFixed} />
          <Menu />
          <Phone />
          <FreeLessonButton className={styles.freeLesson} />
        </div>
      </header>
    </>
  )
}

export default Header
