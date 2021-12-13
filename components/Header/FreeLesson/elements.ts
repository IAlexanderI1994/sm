import styled from "styled-components";
import {Title} from "../../elements";


export const WrapperRightButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.Red};
  padding: 12px 30px;
  border-radius: 30px;
  cursor: pointer;
  //max-width: 320px;
`

export const TitleRightButton = styled(Title)`
  color: ${(props) => props.theme.colors.White};  
`