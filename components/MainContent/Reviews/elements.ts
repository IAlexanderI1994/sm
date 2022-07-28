import styled from 'styled-components'
import { Title, View } from '../../elements'

export const WrapperAboutSchool = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: url('/images/MainFootbol.jpg') 0 50% / cover no-repeat;
  position: relative;
  overflow: hidden;
`

export const WrapperRewiews = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
`

export const ListRewiew = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ItemRewiew = styled.li`
  display: flex;
  flex-direction: column;
`

export const WrapperRewiew = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px;
`

export const TextRewiew = styled.p`
  width: 100%;
  padding: 30px;
  background-color: #f5f5f5;
`
