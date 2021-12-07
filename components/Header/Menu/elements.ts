import styled from 'styled-components'

export const WrapperMenu = styled.ul`
    display: flex;
    justify-content: space-between;
`
export const ItemMenu = styled.li`
  padding: 0 4px;  
`
export const Link = styled.a`
  color: ${(props) => props.theme.colors.BlackMenu};
  font-family: Ubuntu, sans-serif;
  font-size: 14px;
  text-transform: uppercase;
`



