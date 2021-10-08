import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {backgroundColor: colors.white, flex: 1},
  wrapperImage: {justifyContent: 'center', alignItems: 'center'},
  wrapperStok: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
