import React, {useContext} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Image, Button, Text, Alert, TouchableOpacity} from 'react-native';
import styles from '../styles/components/UserBar.style';
import { lightColors } from '../styles/components/Modes/Light';
import { darkColors } from '../styles/components/Modes/Dark';
import { ModeContext, ThemeProvider  } from '../Context/ModeContext';

export const UserBar = () => {
  const {darkTheme, toggle} = useContext(ModeContext);
  let backgroundStyle=darkTheme?darkColors.greyBackgrd:lightColors.lightBackgrd
  let textStyle=darkTheme?darkColors.darkText:lightColors.lightText

  return (
    <View style={[styles.topBar, {backgroundColor: backgroundStyle}]}>
      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={require('./../../assets/media/picture.jpg')}
        />

        <View style={styles.userInfo}>
          <Text style={[styles.userName, {color: textStyle}]}>Ahmad Sami</Text>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../images/Group2134.png')} style={{marginRight:8, marginTop:2}}></Image>
            <Text style={{color: textStyle}}>+20 102 675 9186</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image source={require('../images/numberrr.png')} style={{marginRight:8, marginTop:2, width:15,height:15}}></Image>
            <Text style={{color: textStyle}}>$494,472.95</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
