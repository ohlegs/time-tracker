import { StyleSheet } from 'react-native';
import { BORDER, DEFAULT_BUTTON } from './../../helper/colors';

export default StyleSheet.create({
  container: {
    width: '36.83%',
    height: 50,
  },
  wrapperButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: BORDER,
    height: 50,
    borderWidth: 1,
    borderRadius: 42,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  icon: { width: 20, height: 20 },
  text: {
    color: DEFAULT_BUTTON,
    marginLeft: 10,
    fontSize: 18,
  },
});
