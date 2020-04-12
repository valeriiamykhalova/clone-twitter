import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

import Icon from '@expo/vector-icons/FontAwesome'

export default function FacebookButton({ onPress }) {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Icon name="facebook-f" size={20} color="white" />

        <Text style={styles.buttonText}>Login with Facebook</Text>
      </View>
    </TouchableHighlight>
  )
}

FacebookButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}
