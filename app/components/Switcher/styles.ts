import {StyleSheet} from 'react-native';
import {bg_grey} from './../../helper/colors';

export default StyleSheet.create({
  container: {
    width: '36.83%',
  },
  wrapperSwitcher: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: '#00FFC2',
    height: 50,
    borderWidth: 1,
    borderRadius: 42,
    paddingVertical: 3,
    paddingHorizontal: 3,
  },

  inputName: {
    fontSize: 22,
    marginBottom: 7,
    marginLeft: 14,
    color: bg_grey,
  },

  imagePriority: {
    resizeMode: 'contain',
    height: '100%',
    width: 21,
  },
  bgImage: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 53,
  },
});
