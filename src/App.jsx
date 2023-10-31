import React, {useContext, useState} from 'react';
import {View, StatusBar, Modal} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AccountsScreen,
  BeneficiaryMain,
  CardsScreen,
  HistoryScreen,
  HomeScreen,
  LoginScreen,
  SplashScreen,
  UtilsScreen,
} from './screens';

import { SignUpScreen } from './screens/SignUpScreen';
import { VerificationScreen } from './screens/VerificationScreen'
import { PasswordScreen } from './screens/PasswordScreen';
import { CongratulationsScreen } from './screens/CongratulationsScreen';

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
                  initialRouteName="home"
                  tabBar={prop => (
                    <Navigator {...prop} screenOptions={{headerShown: false}} />
                  )}
                  screenOptions={{
                    header: () => null,
                  }}>
                  <Tab.Screen name="home" component={HomeScreen} />
                  <Stack.Screen name="transfer" component={CashTransferStack} />
                  <Stack.Screen name="beneficiaries" component={BeneficiaryMain} />
                  <Stack.Screen name="map" component={Maps} />
                  <Stack.Screen name="AirPay" component={AirPayScreen} />
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
                  <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
                  <Stack.Screen name="verification" component={VerificationScreen} options={{ headerShown: false}} />
                  <Stack.Screen name="password" component={PasswordScreen} options={{ headerShown: false }} />
                  <Stack.Screen name="congratulations" component={CongratulationsScreen} options={{ headerShown: false }} />
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