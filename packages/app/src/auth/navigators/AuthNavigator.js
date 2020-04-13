import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'

const Stack = createStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animationTypeForReplace: 'pop',
        }}
      />
    </Stack.Navigator>
  )
}
