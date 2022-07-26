import styled from 'styled-components'
import { Title } from '../../elements'

export const WrapperAccount = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`
export const ContainerAccount = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  width: 1200px;
  margin: 0 auto;
  align-items: center;
`

export const TitleBlockAccount = styled.div`
  margin-bottom: 5%;
`

export const TitleAccount = styled(Title)`
  color: ${(props) => props.theme.colors.BlackMenu};
`

export const ChaptersBlock = styled.div`
  display: flex;
`

//style for items___________________________

export const WrapperChapter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 25%;
  div:last-child {
    margin-bottom: 0;
  }
`

export const ItemBlockLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 45px;
`

export const ItemBlockRight = styled(ItemBlockLeft)`
  display: flex;
  justify-content: flex-start;
`

export const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 0 1 60%;
  margin-right: 20px;
`

export const TextBlockRight = styled(TextBlockLeft)`
  margin-right: 0;
  margin-left: 20px;
  align-items: flex-start;
`

export const TitleBlock = styled.div``

export const TitleItemLeft = styled(Title)`
  color: ${(props) => props.theme.colors.BlackBold};
  text-align: end;
`

export const TitleItemRight = styled(TitleItemLeft)`
  text-align: start;
`

export const SubtitleBlock = styled.div``

export const SubtitleItemLeft = styled(Title)`
  color: ${(props) => props.theme.colors.BlackBold};
  text-align: end;
`

export const SubtitleItemRight = styled(SubtitleItemLeft)`
  text-align: start;
`

export const IconBlock = styled.div`
  width: 45px;
`

export const IconImage = styled.img`
  max-width: 100%;
`
