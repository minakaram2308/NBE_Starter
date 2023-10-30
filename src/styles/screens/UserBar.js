import {StyleSheet, useWindowDimensions} from 'react-native';

export default styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 10,
    width: 280,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 24,
  },

  user: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.0,
  },

  userInfo: {
    flexDirection: 'column',
  },

  greeting: {
    color: '#333333',
  },

  userName: {
    color: 'black',
    fontWeight: '700',
  },

  notifications: {
    backgroundColor: '#ffffff',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
