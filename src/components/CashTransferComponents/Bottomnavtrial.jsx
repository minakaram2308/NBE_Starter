import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {  HomeScreen } from '../../screens';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { CashTransferStack } from './CashTransferStack';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
   
    <Tab.Navigator initialRouteName="Home" >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="cashtransfer" component={CashTransferStack} options={({route}) => ({
        header: () => null,
        tabBarStyle: {
            display:
              getFocusedRouteNameFromRoute(route) === 'OtpValidation' ? 'none' : 'flex',
          },
       
      })}/>
    </Tab.Navigator>
    
  );
}