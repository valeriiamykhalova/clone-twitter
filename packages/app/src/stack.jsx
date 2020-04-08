import React from 'react'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Appbar, Avatar, useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Feed } from './feed'
import { Details } from './details'

const Stack = createStackNavigator()

export const StackNavigator = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="FeedList"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name

          return (
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}
            >
              {previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    navigation.openDrawer()
                  }}
                >
                  <Avatar.Image
                    size={40}
                    source={{
                      uri:
                        'https://graph.facebook.com/100012121187000/picture?height=400',
                    }}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={
                  title === 'Feed' ? (
                    <MaterialCommunityIcons
                      style={{ marginRight: 10 }}
                      name="twitter"
                      size={40}
                      color={theme.colors.primary}
                    />
                  ) : (
                    title
                  )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          )
        },
      }}
    >
      <Stack.Screen
        name="FeedList"
        component={Feed}
        options={({ route }) => {
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'Feed'
          return { headerTitle: routeName }
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
  )
}
