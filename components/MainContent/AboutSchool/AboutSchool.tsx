import {
  WrapperAboutSchool,
  SchoolNameImg,
  TitleAbout,
  ContainerAboutSchool,
  ButtonAbout,
  TitleAboutButton,
  ViewBlock,
  WrapperImg,
  VideoBlock,
  WrapperPlay,
  EmblemImg,
  WrapperTitlePlay,
  TitlePlay,
  TrimBlock,
  TrimImage
} from './elements'
import { View } from '../../elements'

const AboutSchool = () => {
  return (
    <>
      <WrapperAboutSchool>
        <ContainerAboutSchool>
          <ViewBlock viewDirection="column" positionView="relative">
            <View viewDirection="column">
              <TitleAbout lineH="56px" fontSize="36px" fontWeight="700">
                Футбольная школа
              </TitleAbout>
              <WrapperImg>
                <SchoolNameImg src="/images/SchoolName.svg" />
              </WrapperImg>
              <TitleAbout lineH="37px" fontSize="24px" fontWeight="400">
                Официальная сеть школ ФК «Спартак-Москва» Набор детей от 4 лет!
              </TitleAbout>
              <ButtonAbout>
                <TitleAboutButton lineH="31px" fontSize="20px" fontWeight="600" textTr="uppercase ">
                  Бесплатное Занятие
                </TitleAboutButton>
              </ButtonAbout>
            </View>
            <VideoBlock>
              <WrapperPlay>
                <EmblemImg src="/images/Play.svg" alt="oqq" />
              </WrapperPlay>
              <WrapperTitlePlay>
                <TitlePlay lineH="31px" fontSize="20px" fontWeight="600">
                  Смотреть видео
                </TitlePlay>
              </WrapperTitlePlay>
            </VideoBlock>
          </ViewBlock>
        </ContainerAboutSchool>
        <TrimBlock>
          <TrimImage src="/images/Trim.svg" />
        </TrimBlock>
      </WrapperAboutSchool>
    </>
  )
}

export default AboutSchool
