import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {
  Surface,
  Title,
  Caption,
  Avatar,
  Subheading,
  useTheme,
} from 'react-native-paper'
import color from 'color'
import { styles } from './styles'

export const TweetDetail = props => {
  const theme = useTheme()

  return (
    <Surface style={styles.container}>
      <View style={styles.topRow}>
        <Avatar.Image
          style={styles.avatar}
          source={{ uri: props.avatar }}
          size={60}
        />
        <View>
          <Title>{props.name}</Title>
          <Caption style={styles.handle}>{props.handle}</Caption>
        </View>
      </View>
      <Subheading style={styles.content}>{props.content}</Subheading>
      {props.image ? (
        <Image source={{ uri: props.image }} style={styles.image} />
      ) : null}
    </Surface>
  )
}
