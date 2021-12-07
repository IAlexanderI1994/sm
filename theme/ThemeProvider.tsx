import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { getTheme } from './getTheme'
import React from "react";

const ThemeProvider: React.FunctionComponent = ({ children }) => <StyledThemeProvider theme={getTheme}>{children}</StyledThemeProvider>

export default ThemeProvider
