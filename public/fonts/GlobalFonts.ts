import { createGlobalStyle } from 'styled-components';


const GlobalFonts = createGlobalStyle`

    @font-face {
        font-family: 'UbuntuLight';
        src: local('Ubuntu Light'), local('Ubuntu-Light'),
            url('/fonts/Ubuntu-Light.woff') format('woff'),
            url('/fonts/Ubuntu-Light.woff') format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
      font-family: 'UbuntuBoldItalic';
      src: local('Ubuntu BoldItalic'), local('Ubuntu-BoldItalic'),
      url('/fonts/Ubuntu-BoldItalic.woff') format('woff'),
      url('/fonts/Ubuntu-BoldItalic.woff') format('woff2');
      font-weight: bold;
      font-style: italic;
    }
`
export default GlobalFonts