import React from 'react'
import useUser from '@/app/user/useUser'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Appbar, Avatar, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

export default function Header({ scene, navigation }) {
  const { image } = useUser()

  const theme = useTheme()
  const { options } = scene.descriptor

  const title =
    options.headerTitle !== undefined ? options.headerTitle : scene.route.name

  function onPress() {
    navigation.openDrawer()
  }

  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <Avatar.Image
          size={40}
          source={{
            uri: image.uri,
          }}
        />
      </TouchableOpacity>
      <Appbar.Content
        title={
          title === 'Feed' ? (
            <MaterialCommunityIcons
              name="twitter"
              size={40}
              color={theme.colors.primary}
            />
          ) : (
            title
          )
        }
        titleStyle={styles.title}
      />
    </Appbar.Header>
  )
}

Header.propTypes = {
  scene: PropTypes.shape({
    route: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    descriptor: PropTypes.shape({
      options: PropTypes.shape({
        headerTitle: PropTypes.string,
      }),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }),
}
