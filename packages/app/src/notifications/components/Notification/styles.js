import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },

  leftColumn: {
    width: 80,
    marginRight: 10,
    alignItems: 'flex-end',
  },

  rightColumn: {
    flex: 1,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    marginRight: 10,
  },

  text: {
    marginBottom: 10,
  },

  content: {
    fontSize: 12,
    opacity: 0.5,
  },
})
