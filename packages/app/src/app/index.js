import React from 'react'
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper'
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native'
import { RootNavigator } from '../rootNavigator'

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: '#1ba1f2',
  },
}

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: '#1ba1f2',
  },
}

export const Root = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme

  const toggleTheme = () => setIsDarkTheme(isDark => !isDark)

  return (
    <PaperProvider
      theme={{
        ...theme,
      }}
    >
      <NavigationContainer theme={theme}>
        <RootNavigator toggleTheme={toggleTheme} />
      </NavigationContainer>
    </PaperProvider>
  )
}
