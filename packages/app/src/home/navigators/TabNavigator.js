import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { useTheme } from 'react-native-paper'
import NotificationsNavigator from '@/notifications/navigators/NotificationsNavigator'
import Message from '@/messages/screens/Messages'
import FeedNavigator from '@/feed/navigators/FeedNavigator'
import FAB from '../components/FAB'

const Tab = createMaterialBottomTabNavigator()

export default function TabNavigator(props) {
  const theme = useTheme()

  const tabBarColor = theme.colors.surface
  const inactiveColor = theme.dark
    ? theme.colors.placeholder
    : theme.colors.backdrop

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        shifting
        activeColor={theme.colors.primary}
        inactiveColor={inactiveColor}
      >
        <Tab.Screen
          name="Feed"
          component={FeedNavigator}
          options={{
            tabBarIcon: 'home-account',
            tabBarColor,
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={NotificationsNavigator}
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
      <FAB {...props} />
    </React.Fragment>
  )
}
