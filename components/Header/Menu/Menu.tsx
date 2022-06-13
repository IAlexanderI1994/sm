import { ItemMenu, WrapperMenu, Link } from './elements'
import { TMenu } from '../types'

const arrayMenuElements: TMenu[] = [
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
    <WrapperMenu>
      {arrayMenuElements.map((item) => (
        <ItemMenu key={item.id}>
          <Link href={`#${item.anchor}`}>{item.title}</Link>
        </ItemMenu>
      ))}
    </WrapperMenu>
  )
}

export default Menu
