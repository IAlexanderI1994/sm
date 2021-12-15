import styled from "styled-components";
import {Title} from "../../elements";



export const WrapperAdvice = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 450px;
  background: ${(props) => props.theme.colors.RedAdvice}; 
`
export const AdviceContainer = styled.div`
  display: flex;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 40%;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column; 
`
export const TitleBlock = styled.div`
  
`
export const TitleAdvice = styled(Title)`
  color: ${(props) => props.theme.colors.White};
`
export const SubtitleBlock = styled.div`
  
`
export const SubtitleAdvice = styled(Title)`
  color: ${(props) => props.theme.colors.White};
`
export const ButtonContainer = styled.div`
  display: flex;
`
export const ButtonBlock = styled.div`
  display: flex;
  flex: 0 0 50%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.White};
  padding: 5px 20px;
  border-radius: 30px;
  cursor: pointer;
`
export const ButtonAdvice = styled(Title)`
  color: ${(props) => props.theme.colors.BlackBold};
`
export const ImageBlock = styled.div`
  position: absolute;
  left: 30%;  
`
export const ArrowImg = styled.img`
  height: 70px;
  width: 70px;
`
export const ImageWrapper = styled.div`
  display: flex;  
  position: absolute;  
  top: -65px;
  left: 40%;
  width: 800px;    
`
export const ImagePlay = styled.img`
  max-width: 100%;
  object-fit: cover;
`

export const TrimBlock = styled.div`
  position: absolute;
  top: 92%;
  left: -521px;
  width: 2560px;
  z-index: 2;
`

export const TrimImage = styled.img`
  max-width: 100%;
`

