import React, {useState,useContext} from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './../styles/components/Navigator.style'
import {AccountsScreen, CardsScreen, HistoryScreen, HomeScreen, LoginScreen, SplashScreen, UtilsScreen} from './screens';
import { lightColors } from '../styles/components/Modes/LightColors';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { ModeContext } from '../Context/ModeContext';
export const Navigator = ({ navigation }) => {
  const {darkTheme, toggle} = useContext(ModeContext);
  let backgroundStyle=darkTheme?darkColors.greyBackgrd:lightColors.lightBackgrd
  let textStyle=darkTheme?darkColors.darkText:lightColors.lightText
  const routeName =
  navigation.getState().routes[navigation.getState().index].name;
console.log(`current route -> ${routeName}`);
  return (
    <View style={[styles.navigator,{backgroundColor:backgroundStyle}]}>
      <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('home');}}
      >
        <View style={styles.activeNavBtn}>
          <MaterialCommunityIcons
            name="home"
            style={styles.activeNavIcon}
            size={25}
          />
          <Text style={styles.activeNavText}>Home</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
       onPress={() => {
        navigation.navigate('transfer');}}
      >
        <View style={styles.navBtn}>
          <MaterialCommunityIcons
            name="bank-transfer"
            style={styles.navIcon}
            size={25}
            
          />
          <Text style={styles.navText}>Transfer</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
       onPress={() => {
        navigation.navigate('beneficiaries');}}
      >
        <View style={styles.navBtn}>
          <Icon
            name="people"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>Benef.</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
       onPress={() => {
        navigation.navigate('map');}}
      >
        <View style={styles.navBtn}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>ATMs</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
       onPress={() => {
        navigation.navigate('AirPay');}}
      >
        <View style={styles.navBtn}>
          <MaterialCommunityIcons
            name="cellphone-nfc"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>Air Pay</Text>
        </View>
      </TouchableWithoutFeedback>

    </View>
  )
}

