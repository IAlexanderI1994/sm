
import styled from "styled-components";
import {Title} from "../../../elements";

export const WrapperTitle = styled.div`
   margin-bottom: 30px;
`

export const TitleFormRegistration = styled(Title)`
  color: ${(props) => props.theme.colors.White};
`

export const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;  
`

export const WrapperInputCountry = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const InputField = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.White};
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  padding: 0 20px;
`

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background: ${(props) => props.theme.colors.White};
  width: 100%;
  height: 50px; 
  padding: 0 15px;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
`

export const WrapperFormIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  width: 340px;  
`

export const ButtonForm = styled.button`
  color: ${(props) => props.theme.colors.BlackBold};
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  background: ${(props) => props.theme.colors.White};
`

export const BlockYellowArrow = styled.div`
  position: absolute;
  transform: rotate(315deg);
  width: 70px;
  height: 70px;
  top: -103%;
  left: 96%;
`

export const ImgYellowArrow = styled.img`
   width: 100%;
`



//InputCountry-------------------------------------------------------------------

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.White};
  font-style: italic;
`

export const WrapperListCountry = styled.div`
  display: flex;
  width: 100%;  
  border-radius: 5px;
  background: ${(props) => props.theme.colors.White};
  padding: 0 20px;
`

export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1 20%;
  margin-right: 5px;
`

export const BlockFlag = styled.div`
   
`

export const BlockArrow = styled.div`
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
`

export const ArrowImg = styled.img`
  width: 8px;
  height: 5px;
`

export const BlockCountryCode = styled.div`
   margin-left: 10px;
  font-size: 16px;
`

export const ContainerPhone = styled.div`
  display: flex;  
  flex: 0 1 80%;
`

export const ContainerListCountryCode = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 55px;
  left: 0;
  overflow-y: scroll;
  min-width: 410px;
  max-height: 200px;
  background: ${(props) => props.theme.colors.White};
  border: 1px solid #eee;
  border-radius: 7px;
  box-shadow: 0 0 1px rgb(0 0 0 / 10%);
  padding: 5px 0;
`

export const ContainerItemCountry = styled.div`
   display: flex;
  padding: 8px 10px;
  cursor: pointer;
`

export const BlockNameItem = styled.div`
  display: flex;
  flex: 0 1 80%;
`

export const BlockCodeItem = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0 1 10%;
`

export const BlockFlagItem = styled.img`
  display: flex;
  justify-content: flex-end;
  flex: 0 1 10%;
  height: 13px;
  width: 18px;
`

export const ContainerInputPhone = styled.div`
  display: flex;
  width: 100%;
`

export const InputFieldCountry = styled.input`
  width: 100%;
  height: 50px;  
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  padding-right: 20px;
  font-family: 'Ubuntu-R';
  color: ${(props) => props.theme.colors.Gray};
`

//Select-------------------------------------------------------

export const WrapperSelect = styled.div`
  display: flex;  
  width: 100%;  
  align-items: center;
  margin-bottom: 20px;
`

export const SelectField = styled.select`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  padding: 0 20px;
`

export const OptionField = styled.option`
  color: ${(props) => props.theme.colors.Gray};
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
`

//Checkbox---------------------------------------------------------

export const WrapperCheckbox = styled.div`
  display: flex;  
  width: 100%;
  margin-bottom: 20px;
  cursor: pointer;
`

export const BlockCheckbox = styled.div`
   display: flex;
  align-items: center;
`

export const CheckboxField = styled.input`
   width: 20px;
  height: 20px;
`

export const BlockTextCheckbox = styled.div`
   display: flex;
  align-items: center;
`

export const TitleCheckbox = styled(Title)`
  color: ${(props) => props.theme.colors.White};
  margin: 0 5px;
`

export const LinkPolicy = styled.a`
  
`

export const TitleLinkPolicy = styled(Title)`
  color: ${(props) => props.theme.colors.White};
  text-decoration: underline;
`


