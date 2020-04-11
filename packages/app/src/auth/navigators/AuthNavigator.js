import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'

const Stack = createStackNavigator()

export default function AuthNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} {...props} />
    </Stack.Navigator>
  )
}
