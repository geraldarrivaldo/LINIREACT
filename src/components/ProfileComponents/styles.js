import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  image: {width: 30, height: 30},
  wrapperInput: {
    paddingHorizontal: 10,
    flex: 1,
    position: 'relative',
  },

  btnLogout: {
    width: 100,
    height: 40,
    backgroundColor: colors.blue,
  },
  icon: {
    backgroundColor: colors.blue,
    width: 55,
    height: 35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  iconSearch: {
    position: 'absolute',
    left: 15,
    top: 27,
  },
  inputSearch: {
    paddingLeft: 35,
  },
  wrapperBanner: {
    padding: 10,
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    height: 150,
    borderRadius: 8,
    backgroundColor: colors.grey,
  },
  wrapperProduct: {
    padding: 5,
  },
  brgWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //   wrapper: {
  //     height: 42,
  //     borderWidth: 1,
  //     borderRadius: 4,
  //     paddingHorizontal: 5,
  //     marginTop: 5,
  //   },
  //   textInput: {flex: 1, width: '100%'},
  //   inputContainer: {paddingVertical: 12},
  //   error: {color: colors.danger, paddingTop: 4, fontSize: 12},
});
