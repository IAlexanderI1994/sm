import styled from "styled-components";
import {Title} from "../../elements";

export const WrapperWelcome = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 210px;
  background: ${(props) => props.theme.colors.BgRed};
  overflow: hidden;
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
  flex: 0 1 50%;
`

export const TitleWelcome = styled(Title)`
  color: ${(props) => props.theme.colors.White};
`

export const SubtitleWelcome = styled(Title)`
  color: ${(props) => props.theme.colors.White};
`

export const BlockImage = styled.div`
  display: flex;
  position: absolute;  
  top: -60%;
  left: 50%;
  width: 650px;
  opacity: 0.2;  
`

export const WelcomeImage = styled.img`
  width: 100%;
  object-fit: cover;  
`

export const TrimBlock = styled.div`
  position: absolute;
  top: 85%;  
  width: 100%;
  z-index: 1;
`

export const TrimImage = styled.img`
  max-width: 100%;
`