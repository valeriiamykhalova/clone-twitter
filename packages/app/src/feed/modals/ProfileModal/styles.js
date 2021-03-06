import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },

  scrollViewContent: {
    position: 'relative',
    flex: 1,
  },

  imageBackground: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 150,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
    marginTop: 7,
    fontSize: 20,
  },

  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  caption: {
    fontSize: 14,
  },

  icon: {
    paddingRight: 5,
  },

  button: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  labelContained: {
    color: 'white',
  },
})
