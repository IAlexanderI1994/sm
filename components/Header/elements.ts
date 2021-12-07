import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => {
    console.log("props",props)
    return props.theme.colors.BlackMenu
    }
}
`