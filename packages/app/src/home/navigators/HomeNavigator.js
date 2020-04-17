import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../components/Header'
import CreateTweetModal from '../modals/CreateTweetModal'

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
      mode="modal"
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen
        name="TabList"
        component={TabNavigator}
        options={getHeaderTitle}
      />
      <Stack.Screen
        name="CreateTweet"
        component={CreateTweetModal}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
