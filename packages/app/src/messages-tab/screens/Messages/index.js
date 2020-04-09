import React from 'react'
import { ScrollView } from 'react-native'
import { Headline, Caption, useTheme, Button } from 'react-native-paper'
import styles from './styles'

export default function Message() {
  const theme = useTheme()

  const backgroundColor = theme.colors.surface

  return (
    <ScrollView
      style={{ backgroundColor }}
      contentContainerStyle={[styles.scrollViewContent, { backgroundColor }]}
    >
      <Headline style={styles.centerText}>
        Send a message, get a message
      </Headline>

      <Caption style={styles.centerText}>
        Private Messages are private conversations between you and other people
        on Twitter. Share Tweets, media, and more!
      </Caption>

      <Button
        style={styles.button}
        mode="contained"
        labelStyle={{ color: 'white' }}
      >
        Write a message
      </Button>
    </ScrollView>
  )
}
