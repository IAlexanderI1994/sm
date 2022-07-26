import React from 'react'
import AdvantageItem from './AdvantageItem'

import styles from './Advantages.module.scss'

interface IProps {
  title: string
  text: string
  icon: string
}

const arrayItems: IProps[] = [
  {
    title: 'Фото отчеты',
    text: 'Смотрите фото и видео отчеты с прошедших турниров',
    icon: '1'
  },
  {
    title: 'Уведомления',
    text: 'Получайте напоминания о предстоящих тренировках',
    icon: '2'
  },
  {
    title: 'Онлайн оплата',
    text: 'Оплачивайте абонемент картой со смартфона',
    icon: '3'
  },
  {
    title: 'Домашние задания',
    text: 'Получайте и выполняйте домашние задания от тренера',
    icon: '4'
  },
  {
    title: 'Методика',
    text: 'Изучайте образовательные материалы',
    icon: '5'
  },
  {
    title: 'Связь с директором',
    text: 'Оставьте свои пожелания директору филиала',
    icon: '6'
  }
]

const Advantages = () => {
  return (
    <div className={styles.root}>
      <div className={styles.blocks}>
        {arrayItems.slice(0, 3).map((item, index) => (
          <AdvantageItem key={index} {...item} type="right" />
        ))}
      </div>
      <img className={styles.image} src="/images/Mobile.png" alt="advantages" />
      <div className={styles.blocks}>
        {arrayItems.slice(3, 6).map((item, index) => (
          <AdvantageItem key={index} {...item} type="left" />
        ))}
      </div>
    </div>
  )
}

export default Advantages
