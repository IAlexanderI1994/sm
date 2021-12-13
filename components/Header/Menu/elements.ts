import styled from 'styled-components'

export const WrapperMenu = styled.ul`
    display: flex;
  flex: 40%;
    justify-content: space-around;
    align-items: center;
    //margin: 0 20px;
`
export const ItemMenu = styled.li`
   
`
export const Link = styled.a`
  color: ${(props) => props.theme.colors.BlackMenu};
  font-family: Ubuntu, sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
`



