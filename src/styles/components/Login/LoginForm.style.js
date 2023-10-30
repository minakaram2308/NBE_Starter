import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/Colors';
import {shadeColor} from '../../../util/Utilities';

const height = 70;
export default styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  // errorText: {
  //   color: colors.error,
  //   textAlign: 'center',
  //   padding: 10,
  // },
  // errorView: {
  //   // flex: 2,
  //   justifyContent: 'center',
  //   alignContent: 'center',
  //   // paddingHorizontal: 20,
  //   // transform: [{translateY: height / 2}],
  //   marginVertical: 'auto',
  //   position: 'relative',
  //   maxWidth: '45%',
  // },
  title: {
    // flex: 2,
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 47,
    color: 'white',
  },
  titleView: {
    // flex:2,
    // justifyContent:"flex-end"
    marginVertical: '2%',
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    // flex: 2,
    justifyContent: 'space-evenly',
  },
  // textInput: {
  //   height: height,
  //   borderRadius: 10,
  //   // borderWidth: 1,
  //   // borderColor: 'white',
  //   // marginVertical: '5%',
  //   // paddingHorizontal: '15%',
  //   // padding:10,

  //   // flex: 8,
  //   position: 'relative',
  //   alignSelf: 'center',
  // },
  // iconInput: {
  //   // flex: 2,
  //   justifyContent: 'center',
  //   alignContent: 'center',
  //   paddingHorizontal: 20,
  //   // transform: [{translateY: height / 2}],
  //   marginVertical: 'auto',
  //   position: 'relative',
  // },
  // floating: {
  //   backgroundColor: 'transparent',
  //   borderRadius: 10,
  //   marginVertical: '2%',

  //   // justifyContent: 'center',
  //   // alignItems: 'flex-end',
  //   flexDirection: 'row',
  //   borderWidth: 1,
  //   borderColor: 'white',
  //   backgroundColor: colors.fade38,
  // },
  // floatingFocused: {
  //   backgroundColor: 'white',
  //   borderColor: colors.green,
  // },
  // floatingError: {
  //   // backgroundColor: colors.errorLight,
  //   borderColor: colors.error,
  // },
  buttons: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  login: {
    flex: 10,
    marginRight: '5%',
  },
  fingerprint: {
    flex: 2,
  },
  rememberMe: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberMeIcon: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: '5%',
  },
  rememberForget: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '5%',
  },
});
