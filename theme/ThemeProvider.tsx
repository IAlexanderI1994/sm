import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme } from './config'
import React from "react";

const ThemeProvider: React.FunctionComponent = ({ children }) => <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>

export default ThemeProvider
