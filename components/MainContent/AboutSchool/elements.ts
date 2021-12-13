import styled from "styled-components";
import {Title, View} from "../../elements";

export const WrapperAboutSchool = styled.div`
  display: flex;  
  min-height: 600px;
  height: 75vh;
  justify-content: center;  
  width: 100%;
  background: url('/images/MainFootbol.jpg') 0 0/cover no-repeat;  
`

export const ContainerAboutSchool = styled.div`
  display: flex;
  width: 1150px;  
`
export const ViewBlock = styled(View)`
  max-width: 550px;
`
export const WrapperImg = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
`

export const SchoolNameImg = styled.img`
  max-width: 500px;
`

export const TitleAbout = styled(Title)`
  color: ${(props) => props.theme.colors.BlackBold};   
`
export const TitleAboutButton = styled(Title)`
  color: ${(props) => props.theme.colors.White};    
`

export const ButtonAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.Red};
  padding: 12px 30px;
  border-radius: 30px;
  cursor: pointer;
  max-width: 320px;
  margin-top: 20px;
`

export const VideoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 320px;
`

export const WrapperPlay = styled.div`
  display: flex;  
`
export const EmblemImg = styled.img`
  max-width: 90px;
  width: 90px;
`
export const WrapperTitlePlay = styled.div`
  display: flex;  
`
export const TitlePlay = styled(Title)`
  color: ${(props) => props.theme.colors.BlackBold};    
`

