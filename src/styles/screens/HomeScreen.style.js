import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  home: {
    height: '100%',
  },
  borderImageContainer: {
    borderRadius: 8,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b8b8b8',
    flexDirection: 'row',
    // justifyContent: 'space-between',

  },
  ImageContainer: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  LogoContainer: {
    marginTop: 21,
    marginLeft: 20,
    marginBottom: 25,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  LanguageButtonContainer: {borderRadius: 14},
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical:10,
  },
  LogOutIconContainer: {marginRight: 10},
  LogOutText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 18,
    color: '#EB001B',
  },
  drawerItemStyle: {
    width: 'auto',
    borderRadius: 16,
    padding: 0,
    marginBottom: 0,
    marginBottom: 0,
  },
  safeAreaContainer:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  
});
