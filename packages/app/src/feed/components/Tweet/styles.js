import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingRight: 15,
  },

  leftColumn: {
    width: 80,
    alignItems: 'center',
  },

  rightColumn: {
    flex: 1,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  title: {
    fontSize: 16,
    lineHeight: 16,
  },

  dot: {
    fontSize: 3,
    marginHorizontal: 3,
  },

  username: {
    marginHorizontal: 3,
  },

  time: {
    textAlign: 'right',
  },

  image: {
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },

  bottomRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconDescription: {
    marginLeft: 2,
    lineHeight: 12,
  },
})
