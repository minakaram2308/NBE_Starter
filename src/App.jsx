import React, {useState} from 'react';
import {View, StatusBar, Modal} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SplashScreen} from './screens';

import styles from './styles/App.style';
import AppLoggedIn from './AppLoggedIn';

const Stack = createNativeStackNavigator();

export const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Modal
        visible={loading}
        animationType="fade"
        statusBarTranslucent={true}
        transparent={true}>
        <SplashScreen onAnimationFinish={setLoading.bind(null, false)} />
      </Modal>

      <NavigationContainer>
        <View style={styles.app}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent={true}
          />

          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="app" component={AppLoggedIn} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </>
  );

  /**
    return (
      <NavigationContainer>
        <View style={styles.app}>
          <TopBar />
          <StatusBar barStyle='dark-content' backgroundColor=colors.background />
  
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="accounts" component={AccountsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="cards" component={CardsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="utils" component={UtilsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="history" component={HistoryScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
  
          <Navigator navigation={navigator}></Navigator>
  
        </View >
      </NavigationContainer>
    );
  */
};
