import React from 'react'
import useUser from '@/app/user/useUser'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Appbar, Avatar, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

export default function Header({ navigation, previous }) {
  const theme = useTheme()
  const { image } = useUser()

  function onPress() {
    navigation.openDrawer()
  }

  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
      {previous ? (
        <Appbar.BackAction
          onPress={navigation.goBack}
          color={theme.colors.primary}
        />
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.touchable}>
          <Avatar.Image size={40} source={image} />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          <MaterialCommunityIcons
            name="twitter"
            size={40}
            color={theme.colors.primary}
          />
        }
        titleStyle={styles.title}
      />
    </Appbar.Header>
  )
}

Header.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }),
  previous: PropTypes.object,
}
