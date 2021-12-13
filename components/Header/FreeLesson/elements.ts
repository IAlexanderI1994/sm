import styled from "styled-components";
import {Title} from "../../elements";


export const WrapperRightButton = styled.div`
  display: flex;
  flex: 20%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.Red};
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;  
`

export const TitleRightButton = styled(Title)`
  color: ${(props) => props.theme.colors.White};  
`