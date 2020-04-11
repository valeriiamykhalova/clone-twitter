import React from 'react'
import { View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

export default function Loading() {
  const theme = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <MaterialCommunityIcons name="twitter" size={70} color="white" />
    </View>
  )
}
