import styled from "styled-components";
import {Title} from "../../elements";
import {TrimBlock, TrimImage} from "../AdviceAndTest/elements";

export const CoachesContainer = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;  
  overflow: hidden;
`

export const CoachesWrapper = styled.div`
  width: 100%;
  height: 330px;
  background: ${(props) => props.theme.colors.Red};
  
  display: flex;
  justify-content: center;
`

export const CoachesBlock = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: right;
  position: relative;
`

export const CoachesImageBlock = styled.div`
  width: 650px;
  position: absolute;
  bottom: -10px;
  left: -20px;
`

export const CoachesImage = styled.img`
  display: block;
   width: 100%;
`

export const CoachesTextBlock = styled.div`
  display: flex;
  width: 45%;
  align-items: center;
`

export const CoachesText = styled(Title)`
   color: ${(props) => props.theme.colors.White};
`

export const CoachesTrimBlock = styled(TrimBlock)`
  
`

export const CoachesTrimImage = styled(TrimImage)`
   
`