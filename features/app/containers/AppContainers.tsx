import React from 'react'
import styled from 'styled-components'


interface IProps {
    children: React.ReactNode
}

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: aquamarine;
`

const AppContainer = ({ children }: IProps): JSX.Element => {

    return (
        <Wrapper>{children}</Wrapper>
    )
}

export default AppContainer
