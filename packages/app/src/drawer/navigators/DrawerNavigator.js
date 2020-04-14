import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../screens/Drawer'

import HomeNavigator from '@/home/navigators/HomeNavigator'
import useUser from '@/app/user/useUser'

const Drawer = createDrawerNavigator()

export default function RootNavigator() {
  const user = useUser()

  if (!user) {
    return null
  }

  function renderDrawerContent() {
    return <DrawerContent />
  }

  return (
    <Drawer.Navigator drawerContent={renderDrawerContent}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  )
}
