import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { RootNavigator } from '../rootNavigator'

export const Root = () => {
  return (
    <PaperProvider
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, primary: '#1ba1f2' },
      }}
    >
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}
