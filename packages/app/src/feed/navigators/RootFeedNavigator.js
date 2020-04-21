import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FeedNavigator from './FeedNavigator'
import ProfileModal from '../modals/ProfileModal'

const RootStack = createStackNavigator()

export default function RootFeedNavigator() {
  return (
    <RootStack.Navigator mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={FeedNavigator} />

      <RootStack.Screen name="ProfileModal" component={ProfileModal} />
    </RootStack.Navigator>
  )
}
