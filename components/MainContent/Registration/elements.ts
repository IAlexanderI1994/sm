import styled from "styled-components";

export const WrapperRegistration = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 550px;
  background: ${(props) => props.theme.colors.White};
  overflow: hidden;
  margin: 3% 0;
`

export const ContainerRegistration = styled.div`
  display: flex;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`

export const WrapperMap = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 1 60%;
`

export const WrapperForm = styled.div`
  display: flex;
  height: 540px;
  width: 460px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.BgRed};
  border-radius: 10px;
  padding: 50px 0;
`