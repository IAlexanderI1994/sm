import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  //Обнуляющие стили начало---------------------------------------------------------------------------------------------
  * {
    padding: 0;
    margin: 0;
    border: 0;
  }

  *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  :focus, :active {
    outline: none;
  }

  a:focus, a:active {
    outline: none;
  }

  nav, footer, header, aside {
    display: block;
  }

  html, body {
    height: 100%;
    width: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: UbuntuLight, sans-serif;
  }

  input, button, textarea {
    font-family: inherit;
  }

  input::-ms-clear {
    display: none;
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  a, a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: 400;
  }
  //Обнуляющие стили конец----------------------------------------------------------------------------------------------

  h1, h2, h3, h4, h5, h6 {
    outline:0;
    vertical-align:baseline;
    background:transparent;
  }

  .svg {
    position: absolute;
    width: 0;
    height: 0;
  }

  body,html {
    min-height: 100%;
    font-family: Ubuntu-R, sans-serif;

  }

  .no-scroll {
    overflow: hidden;
  }

  .overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 200;

  }

  .hidden {
    display: none;
  }

`

export default GlobalStyle
