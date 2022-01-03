import styled from "styled-components";
import {Title} from "../../elements";


export const ContainerGallery = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const BlockTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 3% 0;
`

export const TitleGallery = styled(Title)`
  color: ${(props) => props.theme.colors.BlackMenu};
`

export const BlockImg = styled.a`
  width: 25%;
  padding: 10px 5px 0;
  cursor: pointer;
`

export const ImgMoment = styled.img`
  width: 100%;  
`

export const BlockGallery = styled.div`
   display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
`