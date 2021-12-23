import styled from 'styled-components'

export const WrapperMenu = styled.ul`
  display: flex;
  flex: 0 1 40%;
  justify-content: space-around;
  align-items: center;
`
export const ItemMenu = styled.li``
export const Link = styled.a`
  color: ${(props) => props.theme.colors.BlackMenu};
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
`
