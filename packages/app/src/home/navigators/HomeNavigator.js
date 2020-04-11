import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../components/Header'

import TabNavigator from './TabNavigator'

const Stack = createStackNavigator()

export default function HomeNavigator() {
  function getHeaderTitle({ route }) {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : 'Feed'

    return { headerTitle: routeName }
  }

  return (
    <Stack.Navigator
      initialRouteName="TabList"
      headerMode="screen"
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen
        name="TabList"
        component={TabNavigator}
        options={getHeaderTitle}
      />
    </Stack.Navigator>
  )
}
