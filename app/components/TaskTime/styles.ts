import { StyleSheet } from 'react-native';
import { WHITE } from '../../helper/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  time: {
    fontSize: 45,
    lineHeight: 53,
    color: WHITE,
    fontWeight: '600',
  },
});
