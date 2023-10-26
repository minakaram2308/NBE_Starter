import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Image, Button, Text, Alert, TouchableOpacity} from 'react-native';

import styles from '../styles/components/UserBar.style';

export const UserBar = () => {
  return (
    <View style={styles.topBar}>
      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={require('./../../assets/media/picture.jpg')}
        />

        <View style={styles.userInfo}>
          <Text style={styles.userName}>Ahmad Sami</Text>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../images/Group2134.png')} style={{marginRight:8, marginTop:2}}></Image>
            <Text>+20 102 675 9186</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../images/numberrr.png')} style={{marginRight:8, marginTop:2, width:15,height:15}}></Image>
            <Text>$494,472.95</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
