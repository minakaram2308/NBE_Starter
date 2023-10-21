import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Image, Button, Text, Alert, TouchableOpacity, Pressable } from 'react-native';

import styles from './../styles/components/TopBar.style'
import SlidingModal from './Sidebar';

export const TopBar = () => {
  const [showSidebar, setShowSidebar] = React.useState(false)
  return (
    <View style={styles.topBar}>

      <View style={styles.user}>

        <Pressable
          style={styles.menu}
          onPress={() => setShowSidebar(true)}>
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
      
      <SlidingModal visible={showSidebar} onClose={() => setShowSidebar(false)}>
        <Text>Hi</Text>
      </SlidingModal>
    </View>
  )
}