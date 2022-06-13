import {
  IconBlock,
  IconImage,
  ItemBlockLeft,
  SubtitleBlock,
  SubtitleItemLeft,
  TextBlockLeft,
  TitleBlock,
  TitleItemLeft,
  WrapperChapter
} from '../elements'

interface IProps {
  title: string
  text: string
  icon: string
}

const arrayItems: IProps[] = [
  {
    title: 'Фото отчеты',
    text: 'Смотрите фото и видео отчеты с прошедших турниров',
    icon: '/images/icon/account/1.svg'
  },
  {
    title: 'Уведомления',
    text: 'Получайте напоминания о предстоящих тренировках',
    icon: '/images/icon/account/2.svg'
  },
  {
    title: 'Онлайн оплата',
    text: 'Оплачивайте абонемент картой со смартфона',
    icon: '/images/icon/account/3.svg'
  }
]

const ChapterLeft = () => {
  return (
    <WrapperChapter>
      {arrayItems.map(({ title, text, icon }) => (
        <ItemBlockLeft key={title}>
          <TextBlockLeft>
            <TitleBlock>
              <TitleItemLeft fontSize="20px" fontWeight="600" lineH="27px">
                {title}
              </TitleItemLeft>
            </TitleBlock>
            <SubtitleBlock>
              <SubtitleItemLeft fontSize="16px" fontWeight="300" lineH="25px">
                {text}
              </SubtitleItemLeft>
            </SubtitleBlock>
          </TextBlockLeft>
          <IconBlock>
            <IconImage src={icon} />
          </IconBlock>
        </ItemBlockLeft>
      ))}
    </WrapperChapter>
  )
}

export default ChapterLeft
