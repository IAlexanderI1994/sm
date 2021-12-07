//import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import AppContainer from "../features/app/containers/AppContainers";
import ThemeProvider from "../theme/ThemeProvider";
import GlobalStyles from "../theme/GlobalStyles";
import GlobalFonts from "../public/fonts/GlobalFonts";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider>
        <GlobalStyles/>
        <GlobalFonts/>
        <AppContainer>
            <Component {...pageProps} />
        </AppContainer>
    </ThemeProvider>


)

export default MyApp
