import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from './drawer/drawerContent'

import { StackNavigator } from './notifications-tab/stack'

const Drawer = createDrawerNavigator()

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  )
}
