import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from './config'

const ThemeProvider: React.FunctionComponent = ({ children }: { children: JSX.Element }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
)

export default ThemeProvider
