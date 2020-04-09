import React from 'react'
import { TweetList } from './screens/TweetList'
import { TweetDetail } from './screens/TweetDetail'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export const Feed = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="TweetList" component={TweetList} />
      <Stack.Screen
        name="Details"
        component={TweetDetail}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
  )
}
