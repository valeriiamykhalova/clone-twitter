import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../screens/Drawer'
import PropTypes from 'prop-types'

import HomeNavigator from '@/home/navigators/HomeNavigator'

const Drawer = createDrawerNavigator()

export default function RootNavigator({ toggleTheme }) {
  function renderDrawerContent() {
    return <DrawerContent toggleTheme={toggleTheme} />
  }

  return (
    <Drawer.Navigator drawerContent={renderDrawerContent}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  )
}

RootNavigator.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
}
