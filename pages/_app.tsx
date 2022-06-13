import type { AppProps } from 'next/app'
import AppContainer from '../features/app/containers/AppContainers'
import ThemeProvider from '../theme/ThemeProvider'
import GlobalStyles from '../theme/GlobalStyles'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <GlobalStyles />
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  </ThemeProvider>
)

export default MyApp
