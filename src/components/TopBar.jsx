import React,{useContext,useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Image, Button, Text, Alert, TouchableOpacity } from 'react-native';
import styles from './../styles/components/TopBar.style'
import { ModeContext } from '../context/ModeContext';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { lightColors } from '../styles/components/Modes/LightColors';
export const TopBar = (props) => {
  const {darkTheme, toggle} = useContext(ModeContext);
  let backgroundStyle=darkTheme?darkColors.darkBackgrd:lightColors.lightBackgrd
  let textStyle=darkTheme?darkColors.darkText:lightColors.lightText
  return (
    <View style={[styles.topBar,{backgroundColor:backgroundStyle}]}>

      <View style={styles.user}>
        <TouchableOpacity
          style={styles.menu}
          onPress={() => Alert.alert('Notification clicked', 'This is a notification message')}>
          <MaterialCommunityIcons
            name="menu"
            color={darkTheme?'white':'#333333'}
            size={25}
          />
        </TouchableOpacity>

        <Image
          style={styles.userImage}
          source={require('./../../assets/media/picture.jpg')}
        />

        <View style={styles.userInfo}>
          <Text style={[styles.greeting,{color:textStyle}]}>Good morning</Text>
          <Text style={[styles.userName,{color:textStyle}]}>Ahmad</Text>
        </View>
        
      </View>

      <TouchableOpacity
        style={styles.notifications}
        onPress={() => Alert.alert('Notification clicked', 'This is a notification message')}>
        <MaterialCommunityIcons
          name="bell-outline"
          color='#333333'
          size={20}
        />
      </TouchableOpacity>

    </View>
  )
}