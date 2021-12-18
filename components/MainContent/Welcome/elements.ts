import styled from "styled-components";
import {Title} from "../../elements";

export const WrapperWelcome = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 210px;
  background: ${(props) => props.theme.colors.BgRed};
`

export const ContainerWelcome = styled.div`
  display: flex;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  align-items: center;
`

export const BlockTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 40%;
`

export const TitleWelcome = styled(Title)`
   
`

export const SubtitleWelcome = styled(Title)`
   
`

export const BlockImage = styled.div`
  display: flex;
  position: absolute;
  //top: -65px;
  //left: 40%;
  //width: 800px;
`

export const WelcomeImage = styled.div`
  max-width: 100%;
  object-fit: cover;
`

export const TrimBlock = styled.div`
  position: absolute;
  top: 92%;  
  width: 100%;
  z-index: 2;
`

export const TrimImage = styled.img`
  max-width: 100%;
`