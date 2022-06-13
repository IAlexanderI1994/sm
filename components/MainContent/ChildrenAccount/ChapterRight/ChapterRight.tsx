import {
  WrapperChapter,
  IconBlock,
  IconImage,
  ItemBlockRight,
  SubtitleBlock,
  SubtitleItemRight,
  TextBlockRight,
  TitleBlock,
  TitleItemRight
} from '../elements'

interface IProps {
  title: string
  text: string
  icon: string
}

const arrayItems: IProps[] = [
  {
    title: 'Домашние задания',
    text: 'Получайте и выполняйте домашние задания от тренера',
    icon: '/images/icon/account/4.svg'
  },
  {
    title: 'Методика',
    text: 'Изучайте образовательные материалы',
    icon: '/images/icon/account/5.svg'
  },
  {
    title: 'Связь с директором',
    text: 'Оставьте свои пожелания директору филиала',
    icon: '/images/icon/account/6.svg'
  }
]

const ChapterRight = () => {
  return (
    <WrapperChapter>
      {arrayItems.map(({ title, text, icon }) => (
        <ItemBlockRight key={title}>
          <IconBlock>
            <IconImage src={icon} />
          </IconBlock>
          <TextBlockRight>
            <TitleBlock>
              <TitleItemRight fontSize="20px" fontWeight="600" lineH="27px">
                {title}
              </TitleItemRight>
            </TitleBlock>
            <SubtitleBlock>
              <SubtitleItemRight fontSize="16px" fontWeight="300" lineH="25px">
                {text}
              </SubtitleItemRight>
            </SubtitleBlock>
          </TextBlockRight>
        </ItemBlockRight>
      ))}
    </WrapperChapter>
  )
}

export default ChapterRight
