import React,{useContext,useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Image, Button, Text, Alert, TouchableOpacity } from 'react-native';
import lightStyles from './../styles/components/TopBar.style'
import darkStyles from './../styles/components/DarkTopBar.style'
import { ModeContext } from '../context/ModeContext';

export const TopBar = (props) => {
  const {darkTheme, toggle} = useContext(ModeContext);
  const styles=darkTheme?darkStyles:lightStyles
  console.log(darkTheme)
  return (
    <View style={styles.topBar}>

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
          <Text style={styles.greeting}>Good morning</Text>
          <Text style={styles.userName}>Ahmad</Text>
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