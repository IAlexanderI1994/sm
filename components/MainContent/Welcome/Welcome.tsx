import {BlockImage, BlockTitle, ContainerWelcome, SubtitleWelcome, TitleWelcome, WelcomeImage, WrapperWelcome,TrimBlock, TrimImage } from "./elements"

const Welcome = () => {
    return (
        <WrapperWelcome>
            <ContainerWelcome>
                <BlockTitle>
                    <TitleWelcome fontSize='30px' fontWeight='600' lineH='47px' >Приходите на бесплатное занятие</TitleWelcome>
                    <SubtitleWelcome fontSize='20px' fontWeight='400' lineH='31px' >Чтобы записаться, заполните форму</SubtitleWelcome>
                </BlockTitle>
                <BlockImage>
                    <WelcomeImage src="/images/Label.svg" />
                </BlockImage>
            </ContainerWelcome>
            <TrimBlock>
                <TrimImage src='/images/Trim.svg'/>
            </TrimBlock>
        </WrapperWelcome>
    )
}

export default Welcome