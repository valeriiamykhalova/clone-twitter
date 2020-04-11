import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'
import Notification from '../../components/Notification'

function renderItem(item) {
  return <Notification {...item} />
}

function keyExtractor(item) {
  return item.id.toString()
}

export default function AllNotifications() {
  const theme = useTheme()

  function seperator() {
    return <View style={{ height: StyleSheet.hairlineWidth }} />
  }

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={notifications}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={seperator}
    />
  )
}

const notifications = [
  {
    id: 1,
    content:
      'In any case, the focus is not react navigation, but the possibility of writing your app once and running it on several different platforms.  Then you use the technology you want, for example for the interface, I choose @rn_paper',
    name: 'Leandro Fevre',
    people: [
      {
        name: 'Evan Bacon 🥓',
        image:
          'https://pbs.twimg.com/profile_images/1203624639538302976/h-rvrjWy_400x400.jpg',
      },
      {
        name: 'Leandro Favre',
        image:
          'https://pbs.twimg.com/profile_images/1181019042557173760/a1C7MHkM_400x400.jpg',
      },
    ],
  },
  {
    id: 2,
    content: "It's finally somewhat bright on my way to work 🥳",
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Wojteg1337',
        image:
          'https://pbs.twimg.com/profile_images/1164452902913675264/cn3bEqJp_400x400.jpg',
      },
    ],
  },
  {
    id: 3,
    content:
      'What they say during code review:\n\n"I see your point, but this is extra work - how about we create a ticket for it and get to it next sprint?"\n\nWhat they mean:\n\n"I literally don\'t give a single shit about it and this ticket will rot in the backlog for eternity"',
    name: 'Tomasz Łakomy',
    people: [
      {
        name: 'Nader Dabit',
        image:
          'https://pbs.twimg.com/profile_images/1167093599600816129/APWfpd5O_400x400.jpg',
      },
    ],
  },
  {
    id: 4,
    content:
      'In any case, the focus is not react navigation, but the possibility of writing your app once and running it on several different platforms.  Then you use the technology you want, for example for the interface, I choose @rn_paper',
    name: 'Leandro Fevre',
    people: [
      {
        name: 'Evan Bacon 🥓',
        image:
          'https://pbs.twimg.com/profile_images/1203624639538302976/h-rvrjWy_400x400.jpg',
      },
    ],
  },
]
