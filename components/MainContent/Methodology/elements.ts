import styled from "styled-components";
import {Title} from "../../elements";

export const MethodologyContainer = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;  
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.60), rgba(0,0,0,0.50)),  url('/images/arena.jpg') 0 50%/cover no-repeat;
  position: relative;
  overflow: hidden;
`

export const MethodologyWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MethodologyTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 28px;
  max-width: 960px  
`

export const FirstBlock = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

export const FirstText = styled(Title)`
   color: ${(props) => props.theme.colors.White};
`

export const SecondBlock = styled.div`
  text-align: center;
  padding: 0 20px;
`

export const SecondText = styled(Title)`
  color: ${(props) => props.theme.colors.White};
`

export const MethodologyImageBlock = styled.div`  
  margin: 20px 18px;
`


export const ImageContent = styled.img`
  width: 160px;
  height: 99px;
`


