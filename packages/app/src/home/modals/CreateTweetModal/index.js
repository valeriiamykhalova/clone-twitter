import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import * as firebase from 'firebase'
import PropTypes from 'prop-types'
import { Text, Button, TextInput, Avatar, useTheme } from 'react-native-paper'
import styles from './styles'
import useUser from '@/app/user/useUser'

const createTweet = ({
  createdBy,
  firstName,
  lastName,
  username,
  content,
  avatar,
  createdAt,
  updatedAt,
}) => {
  const tweetRef = firebase.database().ref('/tweets').push()

  return tweetRef.set({
    id: tweetRef.key,
    createdBy,
    firstName,
    lastName,
    username,
    content,
    avatar,
    createdAt,
    updatedAt,
  })
}

export default function CreateTweetModal(props) {
  const [text, setText] = useState('')
  const { firstName, lastName, username, image, id } = useUser()
  const theme = useTheme()

  function onPressCreateTweet() {
    const tweetData = {
      createdBy: id,
      firstName,
      lastName,
      username,
      content: text,
      avatar: {
        uri: image.uri,
        type: 'file',
      },
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    }

    createTweet(tweetData)
    hideModal()
  }

  function hideModal() {
    props.navigation.goBack()
  }

  const inputTheme = theme.dark
    ? null
    : { colors: { background: theme.colors.surface } }

  return (
    <>
      <View style={styles.buttonsContainer}>
        <Button onPress={hideModal} style={styles.cancelButton}>
          Cancel
        </Button>

        <Button
          onPress={onPressCreateTweet}
          mode="contained"
          style={styles.tweetButton}
        >
          <Text style={styles.tweetButtonText}>Tweet</Text>
        </Button>
      </View>

      <ScrollView contentContainerStyle={[styles.scrollViewContent]}>
        <View style={styles.imageContainer}>
          <Avatar.Image style={styles.avatar} source={image} size={40} />
        </View>

        <TextInput
          theme={inputTheme}
          placeholder="What's going on?"
          value={text}
          onChangeText={setText}
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
