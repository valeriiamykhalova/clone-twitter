import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FlatList, View, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import * as firebase from 'firebase'
import Tweet from '../../components/Tweet'

function Item({ item }) {
  return <Tweet {...item} />
}

function keyExtractor(item) {
  return item.id.toString()
}

export default function TweetList(props) {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    firebase
      .database()
      .ref('/tweets')
      .on('value', snapshot => {
        const tweets = Object.values(snapshot.val()).reverse()

        setTweets(tweets)
      })
  }, [])

  const theme = useTheme()

  const data = tweets.map(tweet => ({
    ...tweet,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Details', {
        ...tweet,
      }),
    onAvatarPress: () =>
      props.navigation.navigate('ProfileModal', {
        author: tweet.createdBy,
      }),
  }))

  function Seperator() {
    return <View style={{ height: StyleSheet.hairlineWidth }} />
  }

  return (
    <React.Fragment>
      <FlatList
        contentContainerStyle={{ backgroundColor: theme.colors.background }}
        style={{ backgroundColor: theme.colors.background }}
        data={data}
        renderItem={Item}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Seperator}
      />
    </React.Fragment>
  )
}

TweetList.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.function,
    navigate: PropTypes.function,
  }).isRequired,
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string,
    comments: PropTypes.number.isRequired,
    retweets: PropTypes.number.isRequired,
    hearts: PropTypes.number.isRequired,
  }).isRequired,
}
