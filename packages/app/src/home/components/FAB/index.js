import React from 'react'
import { useTheme, Portal, FAB as ReactPaperFAB } from 'react-native-paper'
import { useIsFocused } from '@react-navigation/native'
import PropTypes from 'prop-types'
import styles from './styles'

export default function FAB(props) {
  const theme = useTheme()
  const isFocused = useIsFocused()

  const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'TweetList'

  let icon = 'feather'

  switch (routeName) {
    case 'Messages':
      icon = 'email-plus-outline'
      break
    default:
      icon = 'feather'
      break
  }

  return (
    <Portal>
      <ReactPaperFAB
        visible={isFocused}
        icon={icon}
        style={styles.icon}
        color="white"
        theme={{
          colors: {
            accent: theme.colors.primary,
          },
        }}
      />
    </Portal>
  )
}

FAB.propTypes = {
  route: PropTypes.shape({
    state: PropTypes.shape({
      index: PropTypes.number.isRequired,
      routes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    }),
  }).isRequired,
}
