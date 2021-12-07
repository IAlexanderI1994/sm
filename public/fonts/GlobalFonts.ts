import { createGlobalStyle } from 'styled-components';


const GlobalFonts = createGlobalStyle`

    @font-face {
        font-family: 'UbuntuLight';
        src: local('Ubuntu Light'), local('Ubuntu-Light'),
            url('/font/Ubuntu-Light.woff') format('woff'),
            url('/font/Ubuntu-Light.woff') format('woff2');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
      font-family: 'UbuntuBoldItalic';
      src: local('Ubuntu-Bold-Italic'), local('UbuntuBoldItalic'),
      url('/font/Ubuntu-BoldItalic.woff') format('woff'),
      url('/font/Ubuntu-BoldItalic.woff') format('woff2');
      font-weight: bold;
      font-style: italic;
    }
`
export default GlobalFonts