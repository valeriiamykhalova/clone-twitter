import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { Avatar, Title, Caption, useTheme, Button } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import useUser from '@/app/user/useUser'
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

function follow(userId, followerId, status) {
  firebase
    .database()
    .ref('userFollowers')
    .child(followerId)
    .set({ [userId]: status })

  firebase
    .database()
    .ref('userFollowing')
    .child(userId)
    .set({ [followerId]: status })
}

async function getIsFollowing(userId, followerId) {
  const res = await firebase
    .database()
    .ref('userFollowers')
    .child(followerId)
    .once('value')

  const following = res.val()

  return following[userId]
}

export default function ProfileModal(props) {
  const [author, setAuthor] = useState(null)
  const [isFollowing, setIsFollowing] = useState(false)

  const authorId = props.route.params.author

  const user = useUser()
  const theme = useTheme()

  const isUserProfile = user.id === authorId

  useEffect(() => {
    getAuthor(authorId).then(setAuthor)
    getIsFollowing(user.id, authorId).then(setIsFollowing)
  }, [])

  function onPressFollow() {
    follow(user.id, authorId, true)
    setIsFollowing(true)
  }

  function onPressUnfollow() {
    follow(user.id, authorId, false)
    setIsFollowing(false)
  }

  const userCreatiionTime = author && moment(author.createdAt).format('LL')
  const darkIconColor = theme.dark ? theme.colors.placeholder : null
  const backgroundColor = theme.dark ? null : theme.colors.surface

  return (
    <View style={styles.scrollViewContent}>
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

            {isFollowing && !isUserProfile && (
              <Button
                style={styles.button}
                mode="outlined"
                onPress={onPressUnfollow}
              >
                Unfollow
              </Button>
            )}
            {!isFollowing && !isUserProfile && (
              <Button
                style={styles.button}
                mode="contained"
                labelStyle={styles.labelContained}
                onPress={onPressFollow}
              >
                Follow
              </Button>
            )}
          </View>
        </>
      )}
    </View>
  )
}

ProfileModal.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      author: PropTypes.string.isRequired,
    }),
  }),
}
