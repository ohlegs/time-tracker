import { StyleSheet } from 'react-native';
import { DEFAULT_BUTTON, NAV_BAR_BG_COLOR, BG_MAIN, TRANSPARENT } from '../../helper/colors';

export default StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: BG_MAIN,
  },

  tabBarStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 12,
    height: 102,
    borderRadius: 42,
    marginBottom: 15,
    backgroundColor: BG_MAIN,
    borderColor: TRANSPARENT,
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
    width: 40,
    height: 40,
    backgroundColor: DEFAULT_BUTTON,
    borderRadius: 20,
  },

  blurView: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: NAV_BAR_BG_COLOR,
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
    transform: [{ rotate: '45deg' }],
  },
});
