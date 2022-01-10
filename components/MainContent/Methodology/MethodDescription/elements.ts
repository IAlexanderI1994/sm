import styled from "styled-components";
import {Title} from "../../../elements";


export const MethodologyContainer = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;  
  padding: 3% 0;
`

export const MethodologyWrapper = styled.div`
  width: 1250px;
  height: 490px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  
`

export const MethodologyTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 55%;
  
`

export const FirstBlock = styled.div`
   margin-bottom: 20px;
`

export const FirstText = styled(Title)`
   color: ${(props) => props.theme.colors.BlackBold};
`

export const SecondBlock = styled.div`
   
`

export const SecondText = styled(Title)`
  color: ${(props) => props.theme.colors.BlackBold};
`

export const MethodologyImageBlock = styled.div`
   display: flex;
  flex: 0 1 45%;
`


export const ImageContent = styled.img`
  width: 750px;
  height: 481px;
`


