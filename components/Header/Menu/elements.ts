import styled from 'styled-components'

export const WrapperMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
`
export const ItemMenu = styled.li`
  padding: 0 4px;  
`
export const Link = styled.a`
  color: ${(props) => props.theme.colors.BlackMenu};
  font-family: Ubuntu, sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
`



