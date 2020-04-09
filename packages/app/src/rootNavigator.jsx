import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from './drawer'

import { StackNavigator } from './stack'

const Drawer = createDrawerNavigator()

export const RootNavigator = ({ toggleTheme }) => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent toggleTheme={toggleTheme} />}
    >
      <Drawer.Screen name="Home" component={StackNavigator} />
    </Drawer.Navigator>
  )
}
