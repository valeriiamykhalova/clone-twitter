import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  buttonsContainer: {
    padding: 30,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cancelButton: {
    borderRadius: 50,
  },

  tweetButton: {
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
  },

  input: {
    flex: 1,
    fontSize: 20,
    lineHeight: 30,
  },
})
