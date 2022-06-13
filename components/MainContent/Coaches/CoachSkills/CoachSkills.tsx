import {
    CoachSkillsWrapper,
    CoachSkillsTextBlock,
    CoachSkillsFirstBlock,
    CoachSkillsFirstText,
    CoachSkillsSecondBlock,
    CoachSkillsSecondText,
    CoachSkillsThirdBlock,
    CoachSkillsThirdText,
    CoachSkillsImageBlock, CoachSkillsImageContent, CoachSkillsContainer
} from './elements'

const CoachSkills = () => {
    return (
        <CoachSkillsContainer>
            <CoachSkillsWrapper>
                <CoachSkillsTextBlock>
                    <CoachSkillsFirstBlock>
                        <CoachSkillsFirstText fontSize='18px' lineH='28px' fontWeight='300'>
                            Все тренеры наших школ регулярно проходят обучение и
                            непрерывно повышают свою квалификацию. Они регулярно
                            изучают вебинары от специалистов академии «Спартака»,
                            а также каждый месяц сдают контрольные тесты на предмет полученных знаний.
                        </CoachSkillsFirstText>
                    </CoachSkillsFirstBlock>
                    <CoachSkillsSecondBlock>
                        <CoachSkillsSecondText fontSize='18px' lineH='28px' fontWeight='300'>
                            Сертификат академии является гарантией того,
                            что тренер осуществляет обучение детей в соответствии с
                            методикой академии ФК «Спартак» имени Федора Черенкова.
                        </CoachSkillsSecondText>
                    </CoachSkillsSecondBlock>
                    <CoachSkillsThirdBlock>
                        <CoachSkillsThirdText fontSize='18px' lineH='28px' fontWeight='300'>
                            Кроме того, родители имеют возможность оставить свой отзыв о
                            работе тренеров и получить обратную связь по всем вопросам,
                            касающимся тренировочного процесса.
                        </CoachSkillsThirdText>
                    </CoachSkillsThirdBlock>
                </CoachSkillsTextBlock>
                <CoachSkillsImageBlock>
                    <CoachSkillsImageContent src='/images/coach2.png'/>
                </CoachSkillsImageBlock>
            </CoachSkillsWrapper>
        </CoachSkillsContainer>
    )
}

export default CoachSkills