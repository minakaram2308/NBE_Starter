import React, { useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Image, Button, Text, Alert, TouchableOpacity, Pressable } from 'react-native';
import styles from './../styles/components/TopBar.style'
import LoginContext from '../store/Authentication/login-context';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { lightColors } from '../styles/components/Modes/LightColors';
import { ModeContext } from '../Context/ModeContext';
export const  TopBar = (props) => {
  const loginContext = useContext(LoginContext)
  const {darkTheme, toggle} = useContext(ModeContext);

  // console.log('<<>>>', props);
  function openDrawerHandler() {
    props.navigation.toggleDrawer();

  }

  let viewStyles = [styles.topBar]
  if(props.transparent){
    viewStyles.push({backgroundColor:"transparent"})
  }
  else{
    viewStyles.push({backgroundColor:darkTheme?darkColors.greyBackgrd:lightColors.lightBackgrd})
  }

  return (
    <View style={viewStyles}>

      <View style={styles.user}>

        <Pressable
          style={styles.menu}
          onPress={openDrawerHandler}>
          <MaterialCommunityIcons
            name="menu"
            color={(!props.transparent && darkTheme)?darkColors.darkText:lightColors.lightText}
            size={25}
          />
        </Pressable>

        <Image
          style={styles.userImage}
          source={require('./../../assets/media/picture.jpg')}
        />

        <View style={styles.userInfo}>
          <Text style={[styles.userName,{color:(!props.transparent && darkTheme)?darkColors.darkText:lightColors.lightText}]}>{loginContext.username}</Text>
          <Text style={[styles.greeting,{color:(!props.transparent && darkTheme)?darkColors.darkText:lightColors.lightText}]}>Good morning</Text>
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