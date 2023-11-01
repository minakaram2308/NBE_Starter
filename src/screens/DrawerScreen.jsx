import React, {useContext, useState} from 'react';
import {
  Image,
  View,
  useWindowDimensions,
  Text,
  Pressable,
  Switch,
} from 'react-native';
import {DrawerItemList, createDrawerNavigator} from '@react-navigation/drawer';
import {PreviewHomeScreen} from './PreviewHomeScreen';
import {AccountSummaryNav} from './NavDummyScreens/AccountSummaryNav';
import {TopBar} from '../components';
import HomeScreenStyle from '../styles/screens/HomeScreen.style';
import styles from '../styles/screens/HomeScreen.style';
import {LanguageButton} from '../components/Buttons/LanguageButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserBar} from '../../src/screens/NavDummyScreens/UserBar';
import { Pdf_React } from '../components/PDF-WEB/Pdf_React';
import { Web_React } from '../components/PDF-WEB/Web_React';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { lightColors } from '../styles/components/Modes/LightColors';

import {
  accountSummaryIcon,
  CertificatesIcon,
  PaymentServiceIcon,
  CardServiceIcon,
  HardTokenIcon,
  CustomerServicesIcon,
  CalculatorIcon,
  DarkModeIcon,
  OffersIcon,
  AhlyLogo,
  logoutIcon,
} from '../../src/constants/DrawerImages';
import LoginContext from '../store/Authentication/login-context';
import { colors } from '../constants/Colors';
import { ModeContext } from '../Context/ModeContext';

const Drawer = createDrawerNavigator();

export const DrawerScreen = ({navigation, screen, transparent}) => {
  const {darkTheme, toggle} = useContext(ModeContext);
  let backgroundStyle=darkTheme?darkColors.darkBackgrd:lightColors.lightBackgrd
  let textStyle=darkTheme?darkColors.darkText:lightColors.lightText
  const loginContext = useContext(LoginContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const windowWidth = useWindowDimensions().width;
  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        drawerContent={props => {
          return (
            <SafeAreaView style={styles.safeAreaContainer}>
              <View>
                <View style={styles.LogoContainer}>
                  <View>
                    <Image source={AhlyLogo} />
                  </View>
                  <View style={styles.LanguageButtonContainer}>
                    <LanguageButton />
                  </View>
                </View>
                <DrawerItemList {...props} />
              </View>
              <View>
                <Pressable
                  style={styles.profileContainer}
                  android_ripple={{color:colors.fade38}}
                  onPress={loginContext.logout}>
                  <View style={styles.LogOutIconContainer}>
                    <Image source={logoutIcon} />
                  </View>
                  <Text style={styles.LogOutText}>Log Out</Text>
                </Pressable>

                <UserBar />
              </View>
            </SafeAreaView>
          );
        }}
        screenOptions={{
          header: props => <TopBar {...props} transparent={transparent}/>,
          headerTransparent: transparent,
          drawerActiveTintColor: 'green',
          drawerStyle: {
            backgroundColor: backgroundStyle,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            width: windowWidth * 0.8,
          },
        }}>
        <Drawer.Screen
          name="Account Summary"
          component={screen}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image
                  source={accountSummaryIcon}
                  style={styles.ImageContainer}
                />
              </View>
            ),
            drawerItemStyle: HomeScreenStyle.drawerItemStyle,
            drawerLabelStyle:{color: textStyle}
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
            drawerItemStyle: HomeScreenStyle.drawerItemStyle,
            drawerLabelStyle:{color: textStyle}
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
            drawerItemStyle: HomeScreenStyle.drawerItemStyle,
            drawerLabelStyle:{color: textStyle}
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
            drawerItemStyle: HomeScreenStyle.drawerItemStyle,
            drawerLabelStyle:{color: textStyle}
          }}
        />
        <Drawer.Screen
          name=" Hard Token"
          component={Web_React}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image source={HardTokenIcon} style={styles.ImageContainer} />
              </View>
            ),
            drawerItemStyle: HomeScreenStyle.drawerItemStyle,
            navigation:navigation,
            drawerLabelStyle:{color: textStyle}
            
          }}
        />
        <Drawer.Screen
          name="Offers"
          component={Pdf_React}
          options={{
            drawerIcon: () => (
              <View style={styles.borderImageContainer}>
                <Image source={OffersIcon} style={styles.ImageContainer} />
              </View>
            ),
            drawerItemStyle: HomeScreenStyle.drawerItemStyle,
            navigation:navigation,
            drawerLabelStyle:{color: textStyle}
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
            drawerItemStyle: HomeScreenStyle.drawerItemStyle,
            drawerLabelStyle:{color: textStyle}
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
            drawerItemStyle: HomeScreenStyle.drawerItemStyle,
            drawerLabelStyle:{color: textStyle}
          }}
        />
        <Drawer.Screen
          name="Dark Mode"
          component={AccountSummaryNav}
          options={{
            drawerIcon: () => (
              <>
                <View style={styles.borderImageContainer}>
                  <Image source={DarkModeIcon} style={styles.ImageContainer} />
                </View>
                <Switch
                  
                  value={darkTheme}
                  onValueChange={toggle}
                  color="#EB001B"
                  style={{position: 'absolute', right: 0}}
                />
              </>
            ),
            drawerItemStyle: HomeScreenStyle.drawerItemStyle,
            drawerLabelStyle:{color: textStyle}
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};
