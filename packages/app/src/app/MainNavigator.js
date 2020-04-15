import React from 'react'
import DrawerNavigator from '@/drawer/navigators/DrawerNavigator'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '@/auth/screens/Login'
import useUser from './user/useUser'

const RootStack = createStackNavigator()

export default function MainNavigator() {
  const user = useUser()

  return (
    <RootStack.Navigator initialRouteName="Login" headerMode="none">
      {user ? (
        <RootStack.Screen name="App" component={DrawerNavigator} />
      ) : (
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{
            animationTypeForReplace: user ? 'push' : 'pop',
          }}
        />
      )}
    </RootStack.Navigator>
  )
}
