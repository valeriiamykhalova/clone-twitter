import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from './drawer/screens/Drawer'

import StackNavigator from './stack'

const Drawer = createDrawerNavigator()

export default function RootNavigator({ toggleTheme }) {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent toggleTheme={toggleTheme} />}
    >
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  )
}
