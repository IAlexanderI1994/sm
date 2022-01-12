import styled from "styled-components";
import {Title} from "../../../elements";


export const MethodologyDescriptionContainer = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;  
  padding: 3% 0;
`

export const MethodologyDescriptionWrapper = styled.div`
  width: 1250px;
  height: 490px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  
  
`

export const MethodologyDescriptionTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 55%;
  
`

export const DescriptionFirstBlock = styled.div`
   margin-bottom: 20px;
`

export const DescriptionFirstText = styled(Title)`
   color: ${(props) => props.theme.colors.BlackBold};
`

export const DescriptionSecondBlock = styled.div`
   
`

export const DescriptionSecondText = styled(Title)`
  color: ${(props) => props.theme.colors.BlackBold};
`

export const MethodologyDescriptionImageBlock = styled.div`
   display: flex;
  flex: 0 1 45%;
`


export const DescriptionImageContent = styled.img`
  width: 750px;
  height: 481px;
`


