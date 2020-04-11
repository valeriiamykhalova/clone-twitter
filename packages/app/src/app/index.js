import React, { useEffect, useState, useMemo } from 'react'
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
import RootNavigator from './RootNavigator'
import AuthNavigator from '@/auth/navigators/AuthNavigator'
import Loading from '@/loading/screens/Loading'
import AuthContext from '@/auth/AuthContext'

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

export default function Root() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)

  const authContext = useMemo(() => {
    return {
      logIn: () => {
        setIsLoading(false)
        setUserToken('token')
      },
      logOut: () => {
        setIsLoading(false)
        setUserToken(null)
      },
    }
  }, [])

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme

  function ToggleTheme() {
    setIsDarkTheme(isDark => !isDark)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider
        theme={{
          ...theme,
        }}
      >
        <NavigationContainer theme={theme}>
          {userToken ? (
            <RootNavigator toggleTheme={ToggleTheme} />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  )
}
