import { StyleSheet } from 'react-native';
import { TRANSPARENT, DEFAULT_BUTTON } from '../../helper/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  circleMainButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DEFAULT_BUTTON,
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
    backgroundColor: TRANSPARENT,
    borderRadius: 54 / 2,
  },
});
