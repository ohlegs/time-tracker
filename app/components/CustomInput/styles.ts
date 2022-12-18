import { StyleSheet } from 'react-native';
import { BG_GREY, BORDER, WHITE } from '../../helper/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  inputName: {
    fontSize: 22,
    marginBottom: 7,
    marginLeft: 14,
    color: BG_GREY,
  },
  wrapperTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: BORDER,
    height: 50,
    borderWidth: 1,
    borderRadius: 42,
    paddingVertical: 14,
    paddingRight: 35,
    paddingLeft: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  mainImage: {
    width: 30,
    height: 22,
    marginRight: 5,
  },
  input: {
    width: '90%',
    height: '100%',
    fontSize: 20,
    color: WHITE,
  },
  pressebleImage: {},
  cancelImage: {
    height: 22,
    width: 22,
  },
});
