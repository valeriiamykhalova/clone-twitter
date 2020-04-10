import React from 'react'
import { View } from 'react-native'
import { Surface, Text, Avatar } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

export default function Notification(props) {
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
          {props.item.people.map(({ name, image }) => (
            <Avatar.Image
              style={{ marginRight: 10 }}
              key={name}
              source={{ uri: image }}
              size={40}
            />
          ))}
        </View>

        <Text style={{ marginBottom: 10 }}>
          {props.item.people.map(({ name }) => name).join(' and ')} likes{' '}
          {props.name} tweet.
        </Text>

        <Text>{props.content}</Text>
      </View>
    </Surface>
  )
}
