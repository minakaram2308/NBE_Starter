// HomeScreen.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import {PreviewHomeScreen} from './PreviewHomeScreen';
import {AccountSummaryNav} from './NavDummyScreens/AccountSummaryNav';
import {TopBar} from '../components';
import {DepositsNav} from './NavDummyScreens/DepositsNav';
import {PaymentsNav} from './NavDummyScreens/PaymentsNav';
import { Pdf_React } from '../components/PDF-WEB/Pdf_React';
import { Web_React } from '../components/PDF-WEB/Web_React';


const Drawer = createDrawerNavigator();

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        screenOptions={{
          header: props => <TopBar {...props} />,
        }}>
        <Drawer.Screen name="Account Summary" component={AccountSummaryNav} />
        <Drawer.Screen name="Open Certificates & Deposits" component={AccountSummaryNav} />
        <Drawer.Screen name="Payement Services" component={AccountSummaryNav} />
        <Drawer.Screen name=" Cards Services" component={AccountSummaryNav} />
        <Drawer.Screen name=" Hard Token" component={Web_React} options={{
            navigation: navigation,
          }}/>
        <Drawer.Screen name="Offers" component={Pdf_React} options={{
            navigation: navigation,
          }}/>
        <Drawer.Screen name="Customer Services" component={AccountSummaryNav} />
        <Drawer.Screen name="Calculators" component={AccountSummaryNav} />
        <Drawer.Screen name="Dark Mode" component={AccountSummaryNav} />

      </Drawer.Navigator>
    </View>
  );
};
