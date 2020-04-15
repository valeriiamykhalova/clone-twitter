import React from 'react'
import { Dimensions } from 'react-native'
import { useTheme } from 'react-native-paper'
import { TabView, SceneMap, TabBar as Tab } from 'react-native-tab-view'

import AllNotifications from '../screens/AllNotifications'

const initialLayout = { width: Dimensions.get('window').width }

const All = () => <AllNotifications />

export default function NotificationsNavigator() {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'all', title: 'All' },
    { key: 'mentions', title: 'Mentions' },
  ])

  const theme = useTheme()

  const renderScene = SceneMap({
    all: All,
    mentions: AllNotifications,
  })

  const tabBarColor = theme.colors.surface

  function TabBar(props) {
    return (
      <Tab
        {...props}
        indicatorStyle={{ backgroundColor: theme.colors.primary }}
        style={{ backgroundColor: tabBarColor, shadowColor: theme.colors.text }}
        labelStyle={{ color: theme.colors.primary }}
      />
    )
  }

  return (
    <React.Fragment>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={TabBar}
      />
    </React.Fragment>
  )
}
