import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../AuthContext'
import { View, TouchableHighlight, Text } from 'react-native'
import Loading from '@/loading/screens/Loading'
import styles from './styles'
import * as Facebook from 'expo-facebook'
import * as firebase from 'firebase'

const FB_APP_ID = '2646921238962818'

export default function Login() {
  const [loading, setLoading] = useState(true)

  const { logIn } = useContext(AuthContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(auth => {
      if (auth) {
        const firebaseRef = firebase.database().ref('users')

        firebaseRef.child(auth.uid).on('value', snap => {
          const user = snap.val()

          if (user != null) {
            firebaseRef.child(auth.uid).off('value')
            logIn(user)
          }
        })
      } else {
        setLoading(false)
      }
    })
  }, [])

  const authenticate = token => {
    const credential = firebase.auth.FacebookAuthProvider.credential(token)

    return firebase.auth().signInWithCredential(credential)
  }

  const createUser = (uid, userData) => {
    firebase
      .database()
      .ref('users')
      .child(uid)
      .update({ ...userData, uid })
  }

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
      <TouchableHighlight style={styles.button} onPress={LogIn}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}
