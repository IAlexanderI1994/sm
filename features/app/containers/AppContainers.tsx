import React from 'react'
import styled from 'styled-components'


interface IProps {
    children: React.ReactNode
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;   
`

const AppContainer = ({ children }: IProps): JSX.Element => {

    return (
        <Wrapper>{children}</Wrapper>
    )
}

export default AppContainer
