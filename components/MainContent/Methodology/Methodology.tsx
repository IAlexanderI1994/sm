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
                            <FirstText fontSize='52px' fontWeight='600' lineH='64px'>
                                Методика и тренерский состав
                            </FirstText>
                        </FirstBlock>
                        <SecondBlock>
                            <SecondText fontSize='18px' fontWeight='300' lineH='28px'>
                                Во всех наших школах применяется методика,
                                разработанная совместно со специалистами Академии футбольного клуба «Спартак»,
                                что позволяет обеспечивать всем ученикам максимально эффективный и
                                профессиональный тренировочный процесс
                            </SecondText>
                        </SecondBlock>
                    </MethodologyTextBlock>
                    <MethodologyImageBlock>
                        <ImageContent src='/images/Label.svg'/>
                    </MethodologyImageBlock>
                </MethodologyWrapper>
            </MethodologyContainer>
            <MethodDescription/>
        </>

    )
}

export default Methodology