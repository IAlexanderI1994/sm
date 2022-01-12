import styled from "styled-components";
import {Title} from "../../../elements";


export const CoachSkillsContainer = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;  
  padding: 3% 0;
`

export const CoachSkillsWrapper = styled.div`
  width: 1250px;
  height: 490px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  
`

export const CoachSkillsTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 55%;
  
`

export const CoachSkillsFirstBlock = styled.div`
   margin-bottom: 20px;
`

export const CoachSkillsFirstText = styled(Title)`
   color: ${(props) => props.theme.colors.BlackBold};
`

export const CoachSkillsSecondBlock = styled.div`
  margin-bottom: 20px;
`

export const CoachSkillsSecondText = styled(Title)`
  color: ${(props) => props.theme.colors.BlackBold};
`

export const CoachSkillsThirdBlock = styled.div`
   
`

export const CoachSkillsThirdText = styled(Title)`
  color: ${(props) => props.theme.colors.BlackBold};
`


export const CoachSkillsImageBlock = styled.div`
   display: flex;
  flex: 0 1 45%;
`


export const CoachSkillsImageContent = styled.img`
  width: 750px;
  height: 481px;
`


