import {ItemMenu, WrapperMenu,Link} from "./elements";



const arrayMenuElements: { id: number; title: string; anchor: string }[] = [
    {
        id: 1,
        title: 'Адреса школ',
        anchor: 'adress'
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
    },
]

const Menu = () => {
    return (
        <WrapperMenu>
            {arrayMenuElements.map((item) => (
                <ItemMenu key={item.id}><Link href={`#${item.anchor}`}>{item.title}</Link></ItemMenu>
            ))}
        </WrapperMenu>
    )
}

export default Menu