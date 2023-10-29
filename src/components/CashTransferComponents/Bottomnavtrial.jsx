import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {  HomeScreen } from '../../screens';
import StackNavigation from './stackNavigation';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="cashtransfer" component={StackNavigation} options={({route}) => ({
        header: () => null,
        tabBarStyle: {
            display:
              getFocusedRouteNameFromRoute(route) === 'OtpValidation' ? 'none' : 'flex',
          },
       
      })}/>
    </Tab.Navigator>
  );
}