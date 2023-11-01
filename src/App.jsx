import React, {useContext, useState} from 'react';
import {View, StatusBar, Modal} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AccountsScreen,
  AddBeneficiarScreen,
  Beneficiar,
  BeneficiaryScreen,
  CardsScreen,
  CashTransfer,
  HistoryScreen,
  HomeScreen,
  LoginScreen,
  SplashScreen,
  UtilsScreen,
} from './screens';

import {SignUpScreen} from './screens/SignUpScreen';
import {VerificationScreen} from './screens/VerificationScreen';
import {PasswordScreen} from './screens/PasswordScreen';
import {CongratulationsScreen} from './screens/CongratulationsScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TopBar, Balance, Navigator} from './components';
import LoginContext from './store/Authentication/login-context';
import {colors} from './constants/Colors';
import styles from './styles/App.style';
import {ModeContext, ThemeProvider} from './Context/ModeContext';
import {CashTransferStack} from './components/CashTransferComponents/CashTransferStack';
import {Maps} from './screens/Maps';
import AirPayScreen from './screens/AirPayScreen';
import { DrawerScreen } from './screens/DrawerScreen';
import AirPayDrawerScreen from './screens/AirPayDrawerScreen';
import BenefDrawerScreen from './screens/BenefDrawerScreen';
import MapDrawerScreen from './screens/MapDrawerScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const App = () => {
  const loginContext = useContext(LoginContext);

  const [loading, setLoading] = useState(true);

  return (
    <>
      <ThemeProvider>
        <Modal
          visible={loading}
          animationType="fade"
          statusBarTranslucent={true}
          transparent={true}>
          <SplashScreen onAnimationFinish={setLoading.bind(null, false)} />
        </Modal>

        <NavigationContainer>
          <View style={styles.app}>
            {loginContext.loggedIn && (
              <>
                <StatusBar
                  barStyle="dark-content"
                  backgroundColor={colors.background}
                  translucent={false}
                />
                <Tab.Navigator
                  initialRouteName="beneficiaries"
                  tabBar={prop => (
                    <Navigator {...prop} screenOptions={{headerShown: false}} />
                  )}
                  screenOptions={{
                    headerShown: false,
                  }}>
                  <Tab.Screen name="home" component={HomeScreen} />
                  <Tab.Screen name="transfer" component={CashTransferStack} />
                  <Tab.Screen name="beneficiaries" component={BenefDrawerScreen} />
                  <Tab.Screen name="map" component={MapDrawerScreen} />
                  <Tab.Screen name="AirPay" component={AirPayDrawerScreen} />
                  <Stack.Screen name="beneficiaryDetails" component={Beneficiar} />
                  <Stack.Screen name="beneficiaryEdit" component={AddBeneficiarScreen} />
                  <Tab.Group>
                    <Tab.Screen name="accounts" component={AccountsScreen} />
                    <Tab.Screen name="cards" component={CardsScreen} />
                    <Tab.Screen name="utils" component={UtilsScreen} />
                    <Tab.Screen name="history" component={HistoryScreen} />
                  </Tab.Group>
                </Tab.Navigator>
              </>
            )}

            {!loginContext.loggedIn && (
              <>
                <StatusBar
                  barStyle="dark-content"
                  backgroundColor={colors.background}
                  translucent={true}
                />

                <Stack.Navigator
                  initialRouteName="login"
                  screenOptions={{headerShown: false}}>
                  <Stack.Screen name="login" component={LoginScreen} />
                  <Stack.Screen
                    name="signup"
                    component={SignUpScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="verification"
                    component={VerificationScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="password"
                    component={PasswordScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="congratulations"
                    component={CongratulationsScreen}
                    options={{headerShown: false}}
                  />
                  {/* <Stack.Screen name="login" component={LoginScreen} /> */}
                </Stack.Navigator>
              </>
            )}
          </View>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};
