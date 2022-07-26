import {
  CoachesContainer,
  CoachesWrapper,
  CoachesBlock,
  CoachesImageBlock,
  CoachesImage,
  CoachesTextBlock,
  CoachesText,
  CoachesTrimBlock,
  CoachesTrimImage
} from './elements'
import CoachSkills from './CoachSkills/CoachSkills'

const Coaches = () => {
  return (
    <>
      <CoachesContainer>
        <CoachesWrapper>
          <CoachesBlock>
            <CoachesImageBlock>
              <CoachesImage src="/images/coach1.png" />
            </CoachesImageBlock>
            <CoachesTextBlock>
              <CoachesText fontSize="18px" fontWeight="400" lineH="28px">
                Обучением детей занимаются преданные своему делу профессионалы. Все тренеры в нашей школе не только имеют профессиональное
                образование , но и прошли обучение и сертифицированы академией ФК «Спартак» для работы в качестве тренера школы «Спартак
                Юниор»
              </CoachesText>
            </CoachesTextBlock>
          </CoachesBlock>
        </CoachesWrapper>
        <CoachesTrimBlock>
          <CoachesTrimImage src="/images/Trim.svg" />
        </CoachesTrimBlock>
      </CoachesContainer>
      <CoachSkills />
    </>
  )
}

export default Coaches
