import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from './drawer/drawerContent'

import { Tweet } from './notifications-tab/screens/Tweet'
import { StackNavigator } from './stack'

const Drawer = createDrawerNavigator()

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Tweet />
    </View>
  )
}

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
