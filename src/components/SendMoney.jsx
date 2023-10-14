import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from './../styles/components/SendMoney.style'

export const SendMoney = () => {

  const [users, setUsers] = useState([
    { name: 'Alexandar', image: require('./../../assets/media/picture.jpg') },
    { name: 'Elsa', image: require('./../../assets/media/avatars/1.png') },
    { name: 'Mazen', image: require('./../../assets/media/avatars/20.png') },
    { name: 'Kasey', image: require('./../../assets/media/avatars/3.png') },
    { name: 'Hala', image: require('./../../assets/media/avatars/10.png') },
    { name: 'Marry', image: require('./../../assets/media/avatars/5.png') },
    { name: 'Hossam', image: require('./../../assets/media/avatars/13.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/15.png') },
  ])


  return (
    <View style={styles.sendMoney}>

      <Text style={styles.title}>Send Money</Text>

      <ScrollView horizontal={true}>
        {
          users.map((user, i) => {
            return <View key={i} style={styles.userCard}>
              <Image
                style={styles.image}
                source={user.image}
              />
              <Text style={styles.name}>{user.name}</Text>
            </View>
          })
        }
      </ScrollView>

    </View>
  )
}