import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  useTheme,
} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

export default function DrawerContent(props) {
  const theme = useTheme()

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://graph.facebook.com/100012121187000/picture?height=400',
            }}
            size={50}
          />

          <Title style={styles.title}>Lera Mykhaliova</Title>

          <Caption style={styles.caption}>@emerell</Caption>

          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                202
              </Paragraph>

              <Caption style={styles.caption}>Following</Caption>
            </View>

            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>

              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem icon={accountIcon} label="Profile" />

          <DrawerItem icon={preferences} label="Preferences" />

          <DrawerItem icon={bookmark} label="Bookmarks" />
        </Drawer.Section>

        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={props.toggleTheme}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>

              <View pointerEvents="none">
                <Switch value={theme.dark} color={theme.colors.primary} />
              </View>
            </View>
          </TouchableRipple>

          <TouchableRipple>
            <View style={styles.preference}>
              <Text>RTL</Text>

              <View pointerEvents="none">
                <Switch value={false} disabled />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  )
}

function accountIcon({ color, size }) {
  return (
    <MaterialCommunityIcons name="account-outline" color={color} size={size} />
  )
}

function bookmark({ color, size }) {
  return (
    <MaterialCommunityIcons name="bookmark-outline" color={color} size={size} />
  )
}
function preferences({ color, size }) {
  return <MaterialCommunityIcons name="tune" color={color} size={size} />
}

DrawerContent.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
}

accountIcon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

bookmark.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

preferences.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}
