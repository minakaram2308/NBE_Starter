import React, { useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Image, Button, Text, Alert, TouchableOpacity} from 'react-native';
 
import styles from '../../styles/screens/UserBar';
import LoginContext from '../../store/Authentication/login-context';
 
export const UserBar = () => {
  const loginContext = useContext(LoginContext);

  return (
    <View style={styles.userBar}>
      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={require('../../../assets/media/picture.jpg')}
        />
 
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{loginContext.username}</Text>
          <View style={{}}>
            <Text>+20 101 131 5412</Text>
          </View>
        </View>
      </View>
    </View>
  );
};