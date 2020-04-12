import React, { useState, useMemo } from 'react'
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
import AuthContext from '@/auth/AuthContext'
import * as firebase from 'firebase'

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

const firebaseConfig = {
  apiKey: 'AIzaSyC64Pbs4EiU5mixNyCivNemZCcUBugmZIM',
  authDomain: 'clone-twitter-fa80c.firebaseapp.com',
  databaseURL: 'https://clone-twitter-fa80c.firebaseio.com',
  projectId: 'clone-twitter-fa80c',
  storageBucket: 'clone-twitter-fa80c.appspot.com',
  messagingSenderId: '392249535836',
  appId: '1:392249535836:web:8ec7bf00a39e1a562f6599',
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

export default function Root() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [user, setUser] = useState(null)

  const authContext = useMemo(
    () => ({
      logIn: user => {
        setUser(user)
      },
      logOut: () => {
        setUser(null)
      },
      getUser: () => user,
    }),
    [user]
  )

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme

  function ToggleTheme() {
    setIsDarkTheme(isDark => !isDark)
  }

  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider
        theme={{
          ...theme,
        }}
      >
        <NavigationContainer theme={theme}>
          {user ? (
            <RootNavigator toggleTheme={ToggleTheme} />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  )
}
