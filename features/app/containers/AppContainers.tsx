import React from 'react'
import styled from 'styled-components'


interface IProps {
    children: React.ReactNode
}

const Wrapper = styled.div`
  margin: 0;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

const AppContainer = ({ children }: IProps): JSX.Element => {

    return (
        <Wrapper>{children}</Wrapper>
    )
}

export default AppContainer
