import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerContent from '../screens/Drawer'
import PropTypes from 'prop-types'

import HomeNavigator from '@/home/navigators/HomeNavigator'

const Drawer = createDrawerNavigator()

export default function RootNavigator({ toggleTheme, user }) {
  function renderDrawerContent() {
    return <DrawerContent toggleTheme={toggleTheme} user={user} />
  }

  return (
    <Drawer.Navigator drawerContent={renderDrawerContent}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  )
}

RootNavigator.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
}
