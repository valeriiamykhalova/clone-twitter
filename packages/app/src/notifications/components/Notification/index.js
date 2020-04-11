import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Surface, Text, Avatar } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

export default function Notification({ item }) {
  return (
    <Surface style={styles.container}>
      <View style={styles.leftColumn}>
        <MaterialCommunityIcons
          name="star-four-points"
          size={30}
          color="#8d38e8"
        />
      </View>

      <View style={styles.rightColumn}>
        <View style={styles.topRow}>
          {item.people.map(({ name, image }) => (
            <Avatar.Image
              style={styles.avatar}
              key={name}
              source={{ uri: image }}
              size={40}
            />
          ))}
        </View>

        <Text style={styles.text}>
          {item.people.map(({ name }) => name).join(' and ')} likes {item.name}{' '}
          tweet.
        </Text>

        <Text style={styles.content}>{item.content}</Text>
      </View>
    </Surface>
  )
}

Notification.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    people: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
}
