//import '../styles/globals.css'
import GlobalStyle from '../theme/GlobalStyles'
import type { AppProps } from 'next/app'
import AppContainer from "../features/app/containers/AppContainers";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <AppContainer>
        <Component {...pageProps} />
    </AppContainer>
)

export default MyApp
