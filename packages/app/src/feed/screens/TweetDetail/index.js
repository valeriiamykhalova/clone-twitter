import React from 'react'
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Surface, Title, Caption, Avatar, Subheading } from 'react-native-paper'
import PropTypes from 'prop-types'

import styles from './styles'

export default function TweetDetail(props) {
  const tweet = props.route.params

  function onAvatarPress() {
    props.navigation.navigate('ProfileModal', {
      author: tweet.createdBy,
    })
  }

  return (
    <ScrollView>
      <Surface style={styles.container}>
        <View style={styles.topRow}>
          <TouchableWithoutFeedback onPress={onAvatarPress}>
            <View>
              <Avatar.Image
                style={styles.avatar}
                source={tweet.avatar}
                size={60}
              />
            </View>
          </TouchableWithoutFeedback>
          <View>
            <Title>
              {tweet.firstName} {tweet.lastName}
            </Title>

            <Caption style={styles.username}>{`@${tweet.username}`}</Caption>
          </View>
        </View>

        <Subheading style={styles.content}>{tweet.content}</Subheading>
      </Surface>
    </ScrollView>
  )
}

TweetDetail.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      avatar: PropTypes.shape({
        uri: PropTypes.string.isRequired,
      }).isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      createdBy: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.function,
  }).isRequired,
}
