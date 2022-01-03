import styled from "styled-components";

export const WrapperPopUp = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  &:target{
    opacity: 1;
    visibility: visible;
  }
`

export const ContainerPopUp = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
  
`

export const BlockPopUp = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;  
  color: black;    
  padding: 30px;
  position: relative;
  height: 800px;
`

export const BlockCross = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;  
`
export const CrossPopUp = styled.a`
  font-size: 20px;
  text-decoration: none;
`

export const BlockImage = styled.div`  
  height: 100%; 
  width: 100%;
`

export const ImagePopUp = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  
`

export const BlockText = styled.div`
   
`