import React, {useContext, useState} from 'react';
import {View, StatusBar, Modal} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AccountsScreen,
  AddBeneficiarScreen,
  Beneficiar,
  BeneficiaryMain,
  CardsScreen,
  HistoryScreen,
  HomeScreen,
  LoginScreen,
  SplashScreen,
  UtilsScreen,
} from './screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TopBar, Balance, Navigator} from './components';
import LoginContext from './store/Authentication/login-context';
import {colors} from './constants/Colors';
import styles from './styles/App.style';
import {ModeContext, ThemeProvider} from './context/ModeContext';
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
                  <Stack.Screen name="beneficiaryDetails" component={Beneficiar} />
                  <Stack.Screen name="beneficiaryEdit" component={AddBeneficiarScreen} />
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
                  {/* //TODO - Add signup here */}
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
