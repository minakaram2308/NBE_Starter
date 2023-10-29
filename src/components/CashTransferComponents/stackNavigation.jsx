import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Main from '../../CashTransfer/Main';
import {Image} from 'react-native';
import Header from './Header';
import OtpValidation from './OtpValidation';
import {CashTransfer, HomeScreen} from '../../screens/';

export default function StackNavigation(){

    const Stack = createStackNavigator();
    
  return (
    <Stack.Navigator screenOptions={() => ({
        headerStyle:{
            backgroundColor:'#F1F3FB'
        },
        headerLeft:null,
        headerRight:()=><Image source={require('../../../assets/CashTransferImages/logo.png')}>
            </Image>

      
    
    })} >
   
      <Stack.Screen name="CashTransfer" component={CashTransfer} 
      options={({navigation }) => ({
        headerTitle: () => <Header navigation={navigation}/>
      })}
      
      />
      <Stack.Screen name="OtpValidation" component={OtpValidation} 
      options={({navigation }) => ({
        headerTitle: () => <Header navigation={navigation}/>
      })}
      
      />
       <Stack.Screen name="Main" component={HomeScreen} />
    </Stack.Navigator>
  );
}