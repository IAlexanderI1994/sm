import {BlockImage, BlockTitle, ContainerWelcome, SubtitleWelcome, TitleWelcome, WelcomeImage, WrapperWelcome,TrimBlock, TrimImage } from "./elements"

const Welcome = () => {
    return (
        <WrapperWelcome>
            <ContainerWelcome>
                <BlockTitle>
                    <TitleWelcome>Приходите на бесплатное занятие</TitleWelcome>
                    <SubtitleWelcome>Чтобы записаться, заполните форму</SubtitleWelcome>
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