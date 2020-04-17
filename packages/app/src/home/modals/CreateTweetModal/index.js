import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import * as firebase from 'firebase'
import PropTypes from 'prop-types'
import { Text, Button, TextInput, Avatar, useTheme } from 'react-native-paper'
import styles from './styles'
import useUser from '@/app/user/useUser'

const createTweet = tweetData => {
  const tweetsRef = firebase.database().ref('/library/tweets')
  const newTweetRef = tweetsRef.push()

  tweetsRef.child(newTweetRef.key).set({ ...tweetData, id: newTweetRef.key })
}

export default function CreateTweetModal(props) {
  const [text, setText] = useState('')
  const { firstName, lastName, image } = useUser()
  const theme = useTheme()

  function onPressCreateTweet() {
    const tweetData = {
      firstName,
      lastName,
      content: text,
      avatar: {
        uri: image.uri,
      },
      comments: 0,
      retweets: 0,
      hearts: 0,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }

    createTweet(tweetData)
    hideModal()
  }

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
