import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Image } from 'react-native'
import { Avatar, Title, Caption, useTheme, Button } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import * as firebase from 'firebase'
import moment from 'moment'

async function getAuthor(authorId) {
  const res = await firebase
    .database()
    .ref('users')
    .child(authorId)
    .once('value')

  return res.val()
}

export default function ProfileModal(props) {
  const [author, setAuthor] = useState(null)

  const authorId = props.route.params.author
  const theme = useTheme()

  useEffect(() => {
    getAuthor(authorId).then(setAuthor)
  }, [])

  const userCreatiionTime = author && moment(author.createdAt).format('LL')
  const darkIconColor = theme.dark ? theme.colors.placeholder : null
  const backgroundColor = theme.dark ? null : theme.colors.surface

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {author && (
        <>
          <Image
            source={author.image}
            style={styles.imageBackground}
            blurRadius={2}
          />

          <View style={[styles.container, { backgroundColor }]}>
            <Avatar.Image source={author.image} size={150} />

            <Title style={styles.title}>
              {author.firstName} {author.lastName}
            </Title>

            <Caption>{`@${author.username}`}</Caption>

            <View style={styles.dateContainer}>
              <MaterialCommunityIcons
                name="calendar"
                size={16}
                style={styles.icon}
                color={darkIconColor}
              />

              <Caption style={styles.caption}>
                on Twitter from {userCreatiionTime}
              </Caption>
            </View>
            <Button
              style={styles.button}
              mode="contained"
              labelStyle={styles.label}
            >
              Follow
            </Button>
          </View>
        </>
      )}
    </ScrollView>
  )
}

ProfileModal.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      author: PropTypes.string.isRequired,
    }),
  }),
}
