import { TMenu } from 'features/app/types'
import styles from './Menu.module.scss'

const list: TMenu[] = [
  {
    id: 1,
    title: 'Адреса школ',
    anchor: 'address'
  },
  {
    id: 2,
    title: 'Яркие моменты',
    anchor: 'moments'
  },
  {
    id: 3,
    title: 'Методика',
    anchor: 'method'
  },
  {
    id: 4,
    title: 'Отзывы',
    anchor: 'reviews'
  }
]

const Menu = () => {
  return (
    <ul className={styles.root}>
      {list.map((item) => (
        <li key={item.id}>
          <a className={styles.link} href={`#${item.anchor}`}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Menu
