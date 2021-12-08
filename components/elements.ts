import styled, {css} from 'styled-components'

type TFlexBLock = {
    viewDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
    wrap?: 'wrap' | 'nowrap'
    displayView?: 'block' | 'flex' | 'inline-block' | 'inline-flex' | 'none'
    align?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'stretch'
    positionView?: 'relative' | 'fixed' | 'absolute' | 'static' | 'sticky'
    top?: string
    left?: string
    right?: string
    bottom?: string
    inner?: string
    outer?: string
    width?: string
    height?: string
    zIndex?: string
    flex?: string
    isPointer?: boolean
    boxSizing?: string
}

type TFlexLinkBLock = TFlexBLock & {
    hoverColor?: string
}

export const View = styled.div<TFlexBLock>`
  display: ${(props) => (props.displayView ? props.displayView : 'flex')};
  ${(props) => props.viewDirection && `flex-direction: ${props.viewDirection}`};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.flex && `flex: ${props.flex}`};
  ${(props) => props.justify && `justify-content: ${props.justify}`};
  ${(props) => props.positionView && `position: ${props.positionView}`};
  ${(props) => props.top && `top: ${props.top}`};
  ${(props) => props.left && `left: ${props.left}`};
  ${(props) => props.bottom && `bottom: ${props.bottom}`};
  ${(props) => props.right && `right: ${props.right}`};
  ${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
  ${(props) => props.outer && `margin: ${props.outer}`};
  ${(props) => props.inner && `padding: ${props.inner}`};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.zIndex && `z-index: ${props.zIndex}`};
  ${(props) => props.isPointer && 'cursor: pointer'};
  ${(props) => props.boxSizing && `box-sizing : ${props.boxSizing}`};
`

export const CustomImg = styled.img<{
    width?: string
    height?: string
    outer?: string
    cursor?: string
    transform?: string
    borderRadius?: string
}>`
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.outer && `margin: ${props.outer}`};
  ${(props) => props.cursor && `cursor: ${props.cursor}`};
  ${(props) => props.transform && `transform: ${props.transform}`};
  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius}`};
`

export const ViewLink = styled.a<TFlexLinkBLock>`
  display: ${(props) => (props.displayView ? props.displayView : 'inline')};
  ${(props) => props.viewDirection && `flex-direction: ${props.viewDirection}`};
  ${(props) => props.align && `align-items: ${props.align}`};
  ${(props) => props.flex && `flex: ${props.flex}`};
  ${(props) => props.justify && `justify-content: ${props.justify}`};
  ${(props) => props.positionView && `position: ${props.positionView}`};
  ${(props) => props.wrap && `flex-wrap: ${props.wrap}`};
  ${(props) => props.outer && `margin: ${props.outer}`};
  ${(props) => props.inner && `padding: ${props.inner}`};
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.zIndex && `z-index: ${props.zIndex}`};
  ${(props) => props.isPointer && 'cursor: pointer'};
  ${(props) =>
    props.hoverColor &&
    css`
      &:hover {
        span {
          color: ${props.theme.colors[props.hoverColor]};
        }
        path {
          fill: ${props.theme.colors[props.hoverColor]};
        }
      }
    `};
`

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;  
`

export const Title = styled.p<{
    fontSize?: string
    textTr?: string
    fontWeight?: string
}>`
  font-family: Ubuntu, sans-serif;
  color: ${(props) => props.theme.colors.BlackMenu};
  ${(props) => props.fontSize && `font-size : ${props.fontSize}`};
  ${(props) => props.fontWeight && `font-weight : ${props.fontWeight}`};
  ${(props) => props.textTr && `text-transform : ${props.textTr}`};
  
   
`

