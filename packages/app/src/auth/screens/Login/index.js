import React, { useState } from 'react'
import { View } from 'react-native'
import Loading from '@/loading/screens/Loading'
import FacebookButton from '../../components/FacebookButton'
import styles from './styles'
import * as Facebook from 'expo-facebook'
import * as firebase from 'firebase'

const FB_APP_ID = '2646921238962818'

const authenticate = token => {
  const credential = firebase.auth.FacebookAuthProvider.credential(token)

  return firebase.auth().signInWithCredential(credential)
}

const createUser = (uid, userData) => {
  firebase
    .database()
    .ref('users')
    .child(uid)
    .update({ ...userData, id: uid, facebookId: userData.id })
}

export default function Login() {
  const [loading, setLoading] = useState(false)

  async function LogIn() {
    setLoading(true)
    await Facebook.initializeAsync(FB_APP_ID)
    const options = {
      permissions: ['public_profile', 'email'],
    }

    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      options
    )

    if (type === 'success') {
      const fields = ['id', 'first_name', 'last_name']
      const response = await fetch(
        `https://graph.facebook.com/me?fields=${fields.toString()}&access_token=${token}`
      )

      const userData = await response.json()
      const { user } = await authenticate(token)

      createUser(user.uid, userData)
    } else {
      console.log('Error!')
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <FacebookButton onPress={LogIn} />
    </View>
  )
}
