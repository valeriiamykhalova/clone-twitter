import React, { useContext } from 'react'
import AuthContext from '../../AuthContext'
import { View, TouchableHighlight, Text } from 'react-native'
import styles from './styles'

export default function Login() {
  const { logIn } = useContext(AuthContext)

  function LogIn() {
    logIn()
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
