import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'

import { Tweet } from './notifications-tab/screens/Tweet'

function renderItem({ item }) {
  return <Tweet {...item} />
}

function keyExtractor(item) {
  return item.id.toString()
}

export const Feed = props => {
  const theme = useTheme()

  const data = tweets.map(tweet => ({
    ...tweet,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Details', {
        ...tweet,
      }),
  }))

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  )
}

const tweets = [
  {
    id: 1,
    name: '🌈 Josh',
    handle: '@JoshWComeau',
    date: '10h',
    content:
      '🔥 Automatically use "smart" directional curly quotes with the `quotes` CSS property! Even handles nested quotes with the <q> tag :o',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar:
      'https://pbs.twimg.com/profile_images/461190672117035010/0kJ4pynr_400x400.jpeg',
    comments: 12,
    retweets: 36,
    hearts: 175,
  },
  {
    id: 2,
    name: 'Satyajit Sahoo',
    handle: '@satya164',
    date: '20h',
    content:
      'Not sure if I should be proud or ashamed of this piece of art 😅\n\n#Typescript',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar:
      'https://pbs.twimg.com/profile_images/1203032057875771393/x0nVAZPL_400x400.jpg',
    comments: 64,
    retweets: 87,
    hearts: 400,
  },
  {
    id: 3,
    name: 'Elvin',
    handle: '@elvin_not_11',
    date: '14h',
    content:
      'Hid the home indicator from the app so the device resembles an actual iPod even more. Thanks @flipeesposito for the suggestion!',
    avatar:
      'https://pbs.twimg.com/profile_images/1203624639538302976/h-rvrjWy_400x400.jpg',
    comments: 23,
    retweets: 21,
    hearts: 300,
  },
  {
    id: 4,
    name: '🌈 Josh',
    handle: '@JoshWComeau',
    date: '10h',
    content:
      '🔥 Automatically use "smart" directional curly quotes with the `quotes` CSS property! Even handles nested quotes with the <q> tag :o',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar:
      'https://pbs.twimg.com/profile_images/461190672117035010/0kJ4pynr_400x400.jpeg',
    comments: 12,
    retweets: 36,
    hearts: 175,
  },
  {
    id: 5,
    name: 'Satyajit Sahoo',
    handle: '@satya164',
    date: '20h',
    content:
      'Not sure if I should be proud or ashamed of this piece of art 😅\n\n#Typescript',
    image: 'https://pbs.twimg.com/media/EONH4KWX4AEV-JP?format=jpg&name=medium',
    avatar:
      'https://pbs.twimg.com/profile_images/1203032057875771393/x0nVAZPL_400x400.jpg',
    comments: 64,
    retweets: 87,
    hearts: 400,
  },
]
