import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import PropTypes from 'prop-types'
import { Text, Button, TextInput, Avatar, useTheme } from 'react-native-paper'
import styles from './styles'
import useUser from '@/app/user/useUser'

export default function CreateTweetModal(props) {
  const [text, setText] = useState('')
  const { image } = useUser()
  const theme = useTheme()

  function hideModal() {
    props.navigation.goBack()
  }

  function onChangeText(writtenText) {
    setText(writtenText)
  }

  function changeInputTheme() {
    if (!theme.dark) {
      return {
        colors: {
          background: theme.colors.surface,
        },
      }
    }
  }

  return (
    <>
      <View style={styles.buttonsContainer}>
        <Button onPress={hideModal} style={styles.cancelButton}>
          Cancel
        </Button>
        <Button mode="contained" style={styles.tweetButton}>
          <Text style={styles.tweetButtonText}>Tweet</Text>
        </Button>
      </View>
      <ScrollView contentContainerStyle={[styles.scrollViewContent]}>
        <View style={styles.imageContainer}>
          <Avatar.Image
            style={styles.avatar}
            source={{ uri: image.uri }}
            size={40}
          />
        </View>
        <TextInput
          theme={changeInputTheme()}
          placeholder="What's going on?"
          value={text}
          onChangeText={onChangeText}
          multiline
          autoFocus
          style={styles.input}
          color="none"
        />
      </ScrollView>
    </>
  )
}

CreateTweetModal.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
}
