import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '15.07%',
    width: '100%',
  },
  circleMainButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00FFC2',
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: 79,
    height: 79,
    borderRadius: 79 / 2,
  },
  circleButtonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  auxiliaryUnit: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 54,
    height: 54,
    padding: 14,
    backgroundColor: 'rgba(255, 0, 0, 0.24);',
    borderRadius: 54 / 2,
    marginRight: 48,
  },
});
