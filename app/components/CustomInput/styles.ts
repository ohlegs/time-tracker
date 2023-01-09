import { StyleSheet } from 'react-native';
import { BG_GREY, WHITE } from '../../helper/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  wrapperTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: BG_GREY,
    height: 50,
    borderRadius: 20,
    paddingVertical: 12,
    paddingRight: 35,
    paddingLeft: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainImage: {
    width: 30,
    height: 22,
    marginRight: 5,
  },
  input: {
    width: '100%',
    height: '100%',
    fontSize: 20,
    color: WHITE,
  },
  separator: {
    height: '100%',
    width: 3,
    borderRadius: 3,
    backgroundColor: BG_GREY,
    marginRight: 5,
  },
  pressebleImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelImage: {
    height: 22,
    width: 22,
  },
});
