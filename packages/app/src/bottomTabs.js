import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { useTheme } from 'react-native-paper'

import { TweetList } from './home-tab/screens/TweetList'
import { NotificationList } from './notifications-tab/notifications'
import { Message } from './messages-tab/screens/Messages'

const Tab = createMaterialBottomTabNavigator()

export const BottomTabs = () => {
  const theme = useTheme()

  const tabBarColor = theme.colors.surface

  return (
    <Tab.Navigator
      initialRouteName="TweetList"
      shifting={true}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.backdrop}
    >
      <Tab.Screen
        name="Twitter"
        component={TweetList}
        options={{
          tabBarIcon: 'home-account',
          tabBarColor,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationList}
        options={{
          tabBarIcon: 'bell-outline',
          tabBarColor,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Message}
        options={{
          tabBarIcon: 'message-text-outline',
          tabBarColor,
        }}
      />
    </Tab.Navigator>
  )
}
