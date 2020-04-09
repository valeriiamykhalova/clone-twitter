import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  avatar: {
    marginRight: 20,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  handle: {
    marginRight: 3,
    lineHeight: 12,
  },

  content: {
    marginTop: 25,
    fontSize: 20,
    lineHeight: 30,
  },

  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 25,
    borderRadius: 20,
    width: '100%',
    height: 280,
  },
})
