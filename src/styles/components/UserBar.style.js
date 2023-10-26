import {
  StyleSheet
} from 'react-native';


export default styles = StyleSheet.create({

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width:'100%',
    
  },


  user: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
    marginLeft:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.00,
  },

  userInfo: {
    flexDirection: 'column',
  },

  greeting: {
    color: '#333333',
  },

  userName: {
    color: '#333333',
    fontWeight: '700'
  },

  notifications: {
    backgroundColor: '#ffffff',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.00,
    elevation: 1,
  }

});