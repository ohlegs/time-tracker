import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1B1E35',
  },

  tabBarStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 12,
    height: 102,
    borderRadius: 42,
    marginBottom: 15,
    backgroundColor: '#1B1E35',
    borderColor: 'transparent',
    elevation: 0,
    padding: 0,
  },

  tabBarBackground: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 42,
  },

  animateCirles: {
    position: 'absolute',
    // left: 275.5555419921875 - 22,
    width: 40,
    height: 40,
    backgroundColor: '#00FFC2',
    borderRadius: 20,
  },

  blurView: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#1710265a',
  },

  history_icon: {
    position: 'absolute',
    right: '60%',
    top: '45%',
    width: 25,
    height: 25,
  },
  add_icon: {
    position: 'absolute',
    left: '60%',
    top: '45%',
    width: 20,
    height: 20,
    transform: [{rotate: '45deg'}],
  },
});
