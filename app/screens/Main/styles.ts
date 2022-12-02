import {StyleSheet} from 'react-native';
import {bg_main} from '../../helper/colors';
import {bg_dinamicWrapper} from './../../helper/colors';
export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: bg_main,
    paddingHorizontal: 12,
    paddingTop: 62,
    paddingBottom: 229,
  },
  formWrapper: {
    marginTop: 18,
  },
  dinamicBlockWrapper: {
    height: '100%',
    backgroundColor: 'red',
  },
  dinamicBlock: {
    height: '100%',
    backgroundColor: bg_dinamicWrapper,
    paddingHorizontal: 20,
    paddingTop: 46,
    borderRadius: 42,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 42,
    backgroundColor: bg_dinamicWrapper,
  },

  dinamicButtonWrapper: {
    marginTop: 17,
  },
});
