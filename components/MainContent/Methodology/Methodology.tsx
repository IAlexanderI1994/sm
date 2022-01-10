import {
    MethodologyContainer,
    MethodologyWrapper,MethodologyTextBlock,
    FirstBlock,FirstText,SecondBlock,SecondText,
    MethodologyImageBlock,ImageContent
} from './elements'
import MethodDescription from "./MethodDescription/MethodDescription";

const Methodology = () => {
    return (
        <>
            <MethodologyContainer>
                <MethodologyWrapper>
                    <MethodologyTextBlock>
                        <FirstBlock>
                            <FirstText>
                                Методика учитывает возрастные особенности детей и
                                обеспечивает их всестороннее развитие.
                                Дети учатся общению со сверстниками,
                                работе в команде, дисциплине,
                                умению справляться с трудностями.
                            </FirstText>
                        </FirstBlock>
                        <SecondBlock>
                            <SecondText>
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
            <MethodDescription/>
        </>

    )
}

export default Methodology