import React from 'react'
import TweetList from '../screens/TweetList'
import TweetDetail from '../screens/TweetDetail'
import Header from '../components/Header'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen name="TweetList" component={TweetList} />

      <Stack.Screen
        name="Details"
        component={TweetDetail}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
  )
}
