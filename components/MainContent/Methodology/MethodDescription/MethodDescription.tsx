import {
    MethodologyDescriptionContainer,
    MethodologyDescriptionWrapper,MethodologyDescriptionTextBlock,
    DescriptionFirstBlock,DescriptionFirstText,DescriptionSecondBlock,DescriptionSecondText,
    MethodologyDescriptionImageBlock,DescriptionImageContent
} from './elements'

const MethodDescription = () => {
    return (
        <MethodologyDescriptionContainer>
            <MethodologyDescriptionWrapper>
                <MethodologyDescriptionTextBlock>
                    <DescriptionFirstBlock>
                        <DescriptionFirstText fontSize='18px' lineH='28px' fontWeight='300'>
                            Методика учитывает возрастные особенности детей и
                            обеспечивает их всестороннее развитие.
                            Дети учатся общению со сверстниками,
                            работе в команде, дисциплине,
                            умению справляться с трудностями.
                        </DescriptionFirstText>
                    </DescriptionFirstBlock>
                    <DescriptionSecondBlock>
                        <DescriptionSecondText fontSize='18px' lineH='28px' fontWeight='300'>
                            Помимо занятий с тренером,
                            наши ученики получают домашние задания через личный кабинет,
                            таким образом их обучение и развитие проходит на
                            регулярной основе и не ограничивается только временем тренировок.
                        </DescriptionSecondText>
                    </DescriptionSecondBlock>
                </MethodologyDescriptionTextBlock>
                <MethodologyDescriptionImageBlock>
                    <DescriptionImageContent src='/images/fight.png'/>
                </MethodologyDescriptionImageBlock>
            </MethodologyDescriptionWrapper>
        </MethodologyDescriptionContainer>
    )
}

export default MethodDescription