// HomeScreen.js
import React, {useState} from 'react';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {Image, View, useWindowDimensions, Text} from 'react-native';
import {PreviewHomeScreen} from './PreviewHomeScreen';
import {AccountSummaryNav} from './NavDummyScreens/AccountSummaryNav';
import {TopBar} from '../components';
import {DepositsNav} from './NavDummyScreens/DepositsNav';
import {PaymentsNav} from './NavDummyScreens/PaymentsNav';
import HomeScreenStyle from '../styles/screens/HomeScreen.style';
import styles from '../styles/screens/HomeScreen.style';
import {LanguageButton} from '../components/Buttons/LanguageButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserBar} from '../../src/screens/NavDummyScreens/UserBar';

const accountSummaryIcon = require('../../assets/media/AccountSummary.png');
const CertificatesIcon = require('../../assets/media/OpenCertificate.png');
const PaymentServiceIcon = require('../../assets/media/PaymentService.png');
const CardServiceIcon = require('../../assets/media/CardService.png');
const HardTokenIcon = require('../../assets/media/HardToken.png');
const CustomerServicesIcon = require('../../assets/media/CustomerServices.png');
const CalculatorIcon = require('../../assets/media/Calculator.png');
const DarkModeIcon = require('../../assets/media/DarkMode.png');
const OffersIcon = require('../../assets/media/Offers.png');
const AhlyLogo = require('../../assets/media/AhlyBankLogo.png');
const logoutIcon = require('../../assets/media/Logout.png');

const Drawer = createDrawerNavigator();

export const HomeScreen = ({navigation}) => {
  const [language, setLanguage] = useState('EN');
  const windowWidth = useWindowDimensions().width;
  const languageChangeHandler = () => {
    setLanguage(previousState => (previousState === 'EN' ? 'AR' : 'EN'));
  };
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        drawerContent={props => {
          const routeNames = props.state.routeNames;
          const lastScreenName = routeNames[routeNames.length - 1];
          return (
            <SafeAreaView
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <View>
                <View style={styles.LogoContainer}>
                  <View>
                    <Image source={AhlyLogo} />
                  </View>
                  <View style={{borderRadius: 14}}>
                    <LanguageButton onPress={languageChangeHandler}>
                      {language}
                    </LanguageButton>
                  </View>
                </View>
                <DrawerItemList {...props} />
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginLeft: 20,
                  }}>
                  <View style={{marginRight:10}}>
                    <Image source={logoutIcon} />
                  </View>
                  <Text style={{fontFamily: 'Roboto', fontWeight:'500', fontSize:18,color:'#EB001B'}}>Log Out</Text>
                </View>
                <UserBar />
              </View>
            </SafeAreaView>
          );
        }}
        screenOptions={{
          header: props => <TopBar {...props} />,
          drawerActiveTintColor: 'green',
          drawerStyle: {
            backgroundColor: '#F1F3FB',
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            width: windowWidth * 0.8,
          },
        }}>
        <Drawer.Screen
          name="Account Summary"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image
                  source={accountSummaryIcon}
                  style={styles.ImageContainer}
                />
              </View>
            ),
            drawerItemStyle: {
              width: 'auto',
              borderRadius: 16,
              padding: 0,
              marginBottom: 0,
              marginBottom: 0,
            },
          }}
        />
        <Drawer.Screen
          name="Open Certificates & Deposits"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image
                  source={CertificatesIcon}
                  style={styles.ImageContainer}
                />
              </View>
            ),
            drawerItemStyle: {
              width: 'auto',
              borderRadius: 16,
              padding: 0,
              marginTop: 0,
              marginBottom: 0,
            },
          }}
        />
        <Drawer.Screen
          name="Payement Services"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image
                  source={PaymentServiceIcon}
                  style={styles.ImageContainer}
                />
              </View>
            ),
            drawerItemStyle: {
              width: 'auto',
              borderRadius: 16,
              padding: 0,
              marginTop: 0,
              marginBottom: 0,
            },
          }}
        />
        <Drawer.Screen
          name=" Cards Services"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image source={CardServiceIcon} style={styles.ImageContainer} />
              </View>
            ),
            drawerItemStyle: {
              width: 'auto',
              borderRadius: 16,
              padding: 0,
              marginTop: 0,
              marginBottom: 0,
            },
          }}
        />
        <Drawer.Screen
          name=" Hard Token"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image source={HardTokenIcon} style={styles.ImageContainer} />
              </View>
            ),
            drawerItemStyle: {
              width: 'auto',
              borderRadius: 16,
              padding: 0,
              marginBottom: 0,
              marginTop: 0,
            },
          }}
        />
        <Drawer.Screen
          name="Offers"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image source={OffersIcon} style={styles.ImageContainer} />
              </View>
            ),
            drawerItemStyle: {
              width: 'auto',
              borderRadius: 16,
              padding: 0,
              marginTop: 0,
              marginBottom: 0,
            },
          }}
        />
        <Drawer.Screen
          name="Customer Services"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image
                  source={CustomerServicesIcon}
                  style={styles.ImageContainer}
                />
              </View>
            ),
            drawerItemStyle: {
              width: 'auto',
              borderRadius: 16,
              padding: 0,
              marginTop: 0,
              marginBottom: 0,
            },
          }}
        />
        <Drawer.Screen
          name="Calculators"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image source={CalculatorIcon} style={styles.ImageContainer} />
              </View>
            ),
            drawerItemStyle: {
              width: 'auto',
              borderRadius: 16,
              padding: 0,
              marginTop: 0,
              marginBottom: 0,
            },
          }}
        />
        <Drawer.Screen
          name="Dark Mode"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image source={DarkModeIcon} style={styles.ImageContainer} />
              </View>
            ),
            drawerItemStyle: {
              width: 'auto',
              borderRadius: 16,
              padding: 0,
              marginTop: 0,
            },
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};
