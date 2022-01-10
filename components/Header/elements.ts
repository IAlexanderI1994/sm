import styled from 'styled-components'

export const HeaderContainer = styled.div`
  &.fixed{
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 2000;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.White}; ;
    animation-name: show_header;
    animation-duration: 30ms;    
  }
  @keyframes show_header {
    0%{
      opacity: 0;
      top: -70px;
    }
    100%{
      opacity: 1;
      top: 0;
    }
  }
`

export const HeaderWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;  
`