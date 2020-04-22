import React from 'react'
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'
import {
  Surface,
  Title,
  Caption,
  Text,
  Avatar,
  TouchableRipple,
  useTheme,
} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment'
import styles from './styles'

export default function Tweet(props) {
  const theme = useTheme()

  const darkIconColor = theme.dark ? theme.colors.placeholder : null

  function goToTweet() {
    props.onPress()
  }

  const timeTweetted = moment(props.createdAt).fromNow()

  return (
    <TouchableRipple onPress={goToTweet}>
      <Surface style={styles.container}>
        <View style={styles.leftColumn}>
          <TouchableWithoutFeedback onPress={props.onAvatarPress}>
            <View>
              <Avatar.Image source={props.avatar} size={60} />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.rightColumn}>
          <View style={styles.topRow}>
            <Title style={styles.title}>
              {props.firstName} {props.lastName}
            </Title>

            <Caption style={styles.dot}>{'\u2B24'}</Caption>

            <Caption>{timeTweetted}</Caption>
          </View>

          <Text>{props.content}</Text>

          <View style={styles.bottomRow}>
            <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={12}
                  color={darkIconColor}
                />

                <Caption style={styles.iconDescription} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={14}
                  color={darkIconColor}
                />

                <Caption style={styles.iconDescription} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity hitSlop={{ top: 10, bottom: 10 }}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={12}
                  color={darkIconColor}
                />

                <Caption style={styles.iconDescription} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Surface>
    </TouchableRipple>
  )
}

Tweet.propTypes = {
  onPress: PropTypes.func.isRequired,
  onAvatarPress: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    uri: PropTypes.string.isRequired,
  }).isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
}
