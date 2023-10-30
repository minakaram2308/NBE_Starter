import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Image, Button, Text, Alert, TouchableOpacity} from 'react-native';
 
import styles from '../../styles/screens/UserBar';
 
export const UserBar = () => {
  return (
    <View style={styles.topBar}>
      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={require('../../../assets/media/picture.jpg')}
        />
 
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Ahmad Sami</Text>
          <View style={{}}>
            <Text>+20 101 131 5412</Text>
          </View>
        </View>
      </View>
    </View>
  );
};