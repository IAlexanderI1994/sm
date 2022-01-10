import {
    MethodologyContainer,
    MethodologyWrapper,MethodologyTextBlock,
    FirstBlock,FirstText,SecondBlock,SecondText,
    MethodologyImageBlock,ImageContent
} from './elements'

const MethodDescription = () => {
    return (
        <MethodologyContainer>
            <MethodologyWrapper>
                <MethodologyTextBlock>
                    <FirstBlock>
                        <FirstText fontSize='18px' lineH='28px' fontWeight='300'>
                            Методика учитывает возрастные особенности детей и
                            обеспечивает их всестороннее развитие.
                            Дети учатся общению со сверстниками,
                            работе в команде, дисциплине,
                            умению справляться с трудностями.
                        </FirstText>
                    </FirstBlock>
                    <SecondBlock>
                        <SecondText fontSize='18px' lineH='28px' fontWeight='300'>
                            Помимо занятий с тренером,
                            наши ученики получают домашние задания через личный кабинет,
                            таким образом их обучение и развитие проходит на
                            регулярной основе и не ограничивается только временем тренировок.
                        </SecondText>
                    </SecondBlock>
                </MethodologyTextBlock>
                <MethodologyImageBlock>
                    <ImageContent src='/images/fight.png'/>
                </MethodologyImageBlock>
            </MethodologyWrapper>
        </MethodologyContainer>
    )
}

export default MethodDescription