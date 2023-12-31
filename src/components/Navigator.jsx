import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StatusBar,
  Keyboard,
} from 'react-native';
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
import {lightColors} from '../styles/components/Modes/LightColors';
import {darkColors} from '../styles/components/Modes/DarkColors';
import {ModeContext} from '../Context/ModeContext';
import {useKeyboardVisible} from '../hooks/useKeyboard';
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
export const Navigator = ({state, descriptors, navigation}) => {
  const {darkTheme, toggle} = useContext(ModeContext);
  let backgroundStyle = darkTheme
    ? darkColors.greyBackgrd
    : lightColors.lightBackgrd;
  let textStyle = darkTheme ? darkColors.darkText : lightColors.lightText;

  const routeName =
    navigation.getState().routes[navigation.getState().index].name;
  console.log(`current route -> ${routeName}`);

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const isKeyboardVisible = useKeyboardVisible();
  if (
    isKeyboardVisible ||
    (focusedOptions.tabBarStyle &&
      focusedOptions.tabBarStyle.display === 'none')
  ) {
    return null;
  }

  const flingLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .runOnJS(true)
    .onEnd(() => {
      if (navigation.getState().index < 4) {
        navigation.navigate(
          navigation.getState().routes[navigation.getState().index + 1].name,
        );
      }
    });
  const flingRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .runOnJS(true)
    .onEnd(() => {
      if (navigation.getState().index > 0) {
        navigation.navigate(
          navigation.getState().routes[navigation.getState().index - 1].name,
        );
      }
    });
  const composed = Gesture.Race(flingLeft, flingRight);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={composed}>
        <View style={[styles.navigator, {backgroundColor: backgroundStyle}]}>
          <StatusBar
            barStyle={`${
              routeName === 'map' ? 'dark' : darkTheme ? 'light' : 'dark'
            }-content`}
          />
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('home');
            }}>
            <View
              style={
                ['home', 'accounts', 'cards', 'utils', 'history'].includes(
                  routeName,
                )
                  ? styles.activeNavBtn
                  : styles.navBtn
              }>
              <MaterialCommunityIcons
                name="home"
                style={
                  ['home', 'accounts', 'cards', 'utils', 'history'].includes(
                    routeName,
                  )
                    ? styles.activeNavIcon
                    : styles.navIcon
                }
                size={25}
              />
              <Text
                style={
                  ['home', 'accounts', 'cards', 'utils', 'history'].includes(
                    routeName,
                  )
                    ? styles.activeNavText
                    : styles.navText
                }>
                Home
              </Text>
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
                  routeName === 'transfer'
                    ? styles.activeNavIcon
                    : styles.navIcon
                }
                size={25}
              />
              <Text
                style={
                  routeName === 'transfer'
                    ? styles.activeNavText
                    : styles.navText
                }>
                Transfer
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('beneficiaries');
            }}>
            <View
              style={
                [
                  'beneficiaries',
                  'beneficiaryDetails',
                  'beneficiaryEdit',
                ].includes(routeName)
                  ? styles.activeNavBtn
                  : styles.navBtn
              }>
              <Icon
                name="people"
                style={
                  [
                    'beneficiaries',
                    'beneficiaryDetails',
                    'beneficiaryEdit',
                  ].includes(routeName)
                    ? styles.activeNavIcon
                    : styles.navIcon
                }
                size={25}
              />
              <Text
                style={
                  [
                    'beneficiaries',
                    'beneficiaryDetails',
                    'beneficiaryEdit',
                  ].includes(routeName)
                    ? styles.activeNavText
                    : styles.navText
                }>
                Benef.
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('map');
            }}>
            <View
              style={routeName === 'map' ? styles.activeNavBtn : styles.navBtn}>
              <MaterialCommunityIcons
                name="map-marker-outline"
                style={
                  routeName === 'map' ? styles.activeNavIcon : styles.navIcon
                }
                size={25}
              />
              <Text
                style={
                  routeName === 'map' ? styles.activeNavText : styles.navText
                }>
                ATMs
              </Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('AirPay');
            }}>
            <View
              style={
                routeName === 'AirPay' ? styles.activeNavBtn : styles.navBtn
              }>
              <MaterialCommunityIcons
                name="cellphone-nfc"
                style={
                  routeName === 'AirPay' ? styles.activeNavIcon : styles.navIcon
                }
                size={25}
              />
              <Text
                style={
                  routeName === 'AirPay' ? styles.activeNavText : styles.navText
                }>
                Air Pay
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};
