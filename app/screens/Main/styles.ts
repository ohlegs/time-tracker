import { StyleSheet } from 'react-native';
import { BG_MAIN, bg_dinamicWrapper } from '../../helper/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: BG_MAIN,
    paddingTop: 62,
    paddingBottom: 229,
  },
  formWrapper: {
    marginTop: 18,
  },
  dinamicBlockWrapper: {
    height: '100%',
  },
  dinamicBlock: {
    height: '100%',
    backgroundColor: bg_dinamicWrapper,
    marginHorizontal: 12,
    paddingHorizontal: 20,
    borderRadius: 42,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 42,
    backgroundColor: bg_dinamicWrapper,
    marginHorizontal: 12,
  },

  dinamicButtonWrapper: {
    marginTop: 17,
  },
  cardScroll: {
    flexDirection: 'row',
    paddingTop: 33,
    height: '80%',
  },
});
