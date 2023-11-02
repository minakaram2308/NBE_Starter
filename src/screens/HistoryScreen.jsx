import React, { useState } from 'react';
import { View, Text, Image, ScrollView , StyleSheet} from 'react-native';
import { useContext } from 'react';
import { ModeContext } from '../Context/ModeContext';

// function wait(ms) {
//   const start = new Date().getTime();
//   let end = start;

//   while (end < start + ms) {
//     end = new Date().getTime();
//   }
// }

// wait(1000);
import { darkColors } from '../styles/components/Modes/DarkColors';
import { lightColors } from '../styles/components/Modes/LightColors';
export const HistoryScreen = () => {
  const {darkTheme, toggle} = useContext(ModeContext);
  let backgroundStyle=darkTheme?darkColors.darkBackgrd:lightColors.lightBackgrd
  let textStyle=darkTheme?darkColors.darkText:lightColors.lightText

  const [users, setUsers] = useState([
    { name: 'Alexandar', image: require('./../../assets/media/picture.jpg') },
    { name: 'Elsa', image: require('./../../assets/media/avatars/1.png') },
    { name: 'Mazen', image: require('./../../assets/media/avatars/2.png') },
    { name: 'Kasey', image: require('./../../assets/media/avatars/3.png') },
    { name: 'Hala', image: require('./../../assets/media/avatars/4.png') },
    { name: 'Marry', image: require('./../../assets/media/avatars/5.png') },
    { name: 'Hossam', image: require('./../../assets/media/avatars/6.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/6.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/8.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/8.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/9.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/10.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/11.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/12.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/13.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/14.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/15.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/16.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/17.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/18.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/19.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/20.png') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/21.jpg') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/22.jpg') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/23.jpg') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/24.jpg') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/25.jpg') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/26.jpg') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/27.jpg') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/28.jpg') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/29.jpg') },
    { name: 'Mohamed', image: require('./../../assets/media/avatars/30.jpg') },
  ])

  
  return (
    <View style={styles.leafContainer}>
      <Text style={styles.title}>History</Text>
    <ScrollView>
      {users.map((user, i) => {
        return (
          <View key={i} style={[styles.userContainer]}>
            <View style={styles.userCard}>
              <Image style={styles.image} source={user.image} />
            </View>
            <View style={styles.userDetails}>
              <View style={styles.nameDateContainer}>
                <Text style={[styles.name, {color: textStyle}]}>{user.name}</Text>
                <Text style={[styles.date,{color: textStyle}]}>15-12-2021</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={[styles.price,{color: textStyle}]}>$250.21</Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#222222',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  leafContainer: {
    flex: 1,
     marginEnd: 20,
     paddingTop: 25,
    },
  image: {
    width: 70,
    height: 60,
    borderRadius: 10,
    marginBottom: 5,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userCard: {
    width: 79,
    height: 80,
    padding: 5,
    borderRadius: 10,
    margin: 3,
  },
  userDetails: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  nameDateContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  name: {
    padding: 5,
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '400',
  },
  date: {
    color: '#767575',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
  },
  priceContainer: {},
  price: {
    color: '#767575',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
  },

})