import React, { useContext } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Image, Button, Text, Alert, TouchableOpacity, Pressable } from 'react-native';

import styles from './../styles/components/TopBar.style'
import LoginContext from '../store/Authentication/login-context';

export const  TopBar = (props) => {
  const loginContext = useContext(LoginContext)

  // console.log('<<>>>', props);
  function openDrawerHandler() {
    props.navigation.toggleDrawer();

  }
  return (
    <View style={styles.topBar}>

      <View style={styles.user}>

        <Pressable
          style={styles.menu}
          onPress={openDrawerHandler}>
          <MaterialCommunityIcons
            name="menu"
            color='#333333'
            size={25}
          />
        </Pressable>

        <Image
          style={styles.userImage}
          source={require('./../../assets/media/picture.jpg')}
        />

        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Good morning</Text>
          <Text style={styles.userName}>{loginContext.username}</Text>
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
      
      <SlidingModal visible={showSidebar} onClose={() => setShowSidebar(false)}>
        <Text>Hi</Text>
      </SlidingModal>
    </View>
  )
}