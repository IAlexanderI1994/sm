import {AdviceContainer, ArrowImg, ButtonAdvice, ButtonBlock, ButtonContainer,
    ImageBlock, ImagePlay, ImageWrapper,
    SubtitleAdvice,SubtitleBlock, TitleAdvice,
    TitleBlock,
    TitleWrapper,
    TrimBlock,
    WrapperAdvice,
    TrimImage } from "./elements"



const AdviceAndTest = () => {
    return (
        <WrapperAdvice>
            <AdviceContainer>
                <TitleWrapper>
                    <TitleBlock>
                        <TitleAdvice fontSize='26px' lineH='40px' fontWeight='600'>
                            Сможет ли Ваш ребёнок заниматься
                            футболом профессионально?
                        </TitleAdvice>
                    </TitleBlock>
                    <SubtitleBlock>
                        <SubtitleAdvice fontSize='18px' lineH='28px' fontWeight='400'>
                            Пройдите тест и получите рекомендации
                            к тренировкам для Вашего ребенка +
                            одно бесплатное занятие в футбольной школе Спартак.
                            Длительность теста 1 минута
                        </SubtitleAdvice>
                    </SubtitleBlock>
                    <ButtonContainer>
                        <ButtonBlock>
                            <ButtonAdvice fontSize='18px' lineH='28px' fontWeight='600' textTr='uppercase'>
                                Пройти тест
                            </ButtonAdvice>
                        </ButtonBlock>
                        <ImageBlock>
                            <ArrowImg src='/images/YellowArrow.svg' alt='Ой' />
                        </ImageBlock>
                    </ButtonContainer>
                </TitleWrapper>
                <ImageWrapper>
                    <ImagePlay src='/images/AdviceImage.png' alt='Ой' />
                </ImageWrapper>
            </AdviceContainer>
            <TrimBlock>
                <TrimImage src='/images/Trim.svg'/>
            </TrimBlock>
        </WrapperAdvice>
    )
}

export default AdviceAndTest