import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../screens/Drawer'

import HomeNavigator from '../../home/navigators/HomeNavigator'

const Drawer = createDrawerNavigator()

export default function RootNavigator({ toggleTheme }) {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent toggleTheme={toggleTheme} />}
    >
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  )
}
