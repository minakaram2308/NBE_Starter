import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/Colors';
import {shadeColor} from '../../util/Utilities';

const height = 70;
export default styles = StyleSheet.create({
  errorText: {
    color: colors.error,
    textAlign: 'center',
    padding: 10,
  },
  errorView: {
    // flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    // paddingHorizontal: 20,
    // transform: [{translateY: height / 2}],
    marginVertical: 'auto',
    position: 'relative',
    maxWidth: '45%',
  },
  textInput: {
    height: height,
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'white',
    // marginVertical: '5%',
    // paddingHorizontal: '15%',
    // padding:10,

    // flex: 8,
    position: 'relative',
    alignSelf: 'center',
  },
  iconInput: {
    // flex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    // transform: [{translateY: height / 2}],
    marginVertical: 'auto',
    position: 'relative',
  },
  floating: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginVertical: '2%',

    // justifyContent: 'center',
    // alignItems: 'flex-end',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: colors.fade38,
  },
  floatingFocused: {
    backgroundColor: 'white',
    borderColor: colors.green,
  },
  floatingError: {
    // backgroundColor: colors.errorLight,
    borderColor: colors.error,
  },
});
