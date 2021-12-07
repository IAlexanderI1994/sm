
import {themeColors} from '../default/colors'
import {themeShadows} from '../default/shadows'


const defaultThemeConstruct = () => ({
  colors: themeColors,
  shadows: themeShadows

})

export const getTheme = defaultThemeConstruct()
