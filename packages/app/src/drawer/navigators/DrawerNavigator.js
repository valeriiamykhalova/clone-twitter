import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../screens/Drawer'

import HomeNavigator from '@/home/navigators/HomeNavigator'

const Drawer = createDrawerNavigator()

export default function RootNavigator() {
  function renderDrawerContent() {
    return <DrawerContent />
  }

  return (
    <Drawer.Navigator drawerContent={renderDrawerContent}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  )
}
