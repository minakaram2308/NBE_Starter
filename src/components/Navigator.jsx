import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './../styles/components/Navigator.style';
import {
  AccountsScreen,
  CardsScreen,
  HistoryScreen,
  HomeScreen,
  LoginScreen,
  SplashScreen,
  UtilsScreen,
} from './screens';

export const Navigator = ({navigation}) => {
  const routeName =
    navigation.getState().routes[navigation.getState().index].name;
  console.log(`current route -> ${routeName}`);

  return (
    <View style={styles.navigator}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('home');
        }}>
        <View
          style={routeName === 'home' ? styles.activeNavBtn : styles.navBtn}>
          <MaterialCommunityIcons
            name="home"
            style={routeName === 'home' ? styles.activeNavIcon : styles.navIcon}
            size={25}
          />
          <Text style={styles.activeNavText}>Home</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('transfer');
        }}>
        <View
          style={
            routeName === 'transfer' ? styles.activeNavBtn : styles.navBtn
          }>
          <MaterialCommunityIcons
            name="bank-transfer"
            style={
              routeName === 'transfer' ? styles.activeNavIcon : styles.navIcon
            }
            size={25}
          />
          <Text style={styles.navText}>Transfer</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('cards');
        }}>
        <View
          style={routeName === 'cards' ? styles.activeNavBtn : styles.navBtn}>
          <Icon
            name="people"
            style={
              routeName === 'cards' ? styles.activeNavIcon : styles.navIcon
            }
            size={25}
          />
          <Text style={styles.navText}>Benef.</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('map');
        }}>
        <View style={routeName === 'map' ? styles.activeNavBtn : styles.navBtn}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            style={routeName === 'map' ? styles.activeNavIcon : styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>ATMs</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('AirPay');
        }}>
        <View
          style={routeName === 'AirPay' ? styles.activeNavBtn : styles.navBtn}>
          <MaterialCommunityIcons
            name="cellphone-nfc"
            style={
              routeName === 'AirPay' ? styles.activeNavIcon : styles.navIcon
            }
            size={25}
          />
          <Text style={styles.navText}>Air Pay</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
