import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  buttonsContainer: {
    padding: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: theme.colors.background,
  },

  cancelButton: {
    borderRadius: 50,
  },

  tweetButton: {
    paddingHorizontal: 10,
    color: 'white',
    borderRadius: 50,
  },

  tweetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  scrollViewContent: {
    flex: 1,
    flexDirection: 'row',
  },

  imageContainer: {
    paddingTop: 13,
    paddingHorizontal: 5,
    // backgroundColor: theme.colors.background,
  },

  input: {
    flex: 1,
    // backgroundColor: theme.colors.background,
    fontSize: 20,
    lineHeight: 30,
  },
})
