import { createStackNavigator } from '@react-navigation/stack';
import React,{useContext} from 'react';
import Main from '../../CashTransfer/Main';
import {Image} from 'react-native';
import Header from './Header';
import OtpValidation from './OtpValidation';
import {CashTransfer, HomeScreen} from '../../screens/';
import { darkColors } from '../../styles/components/Modes/DarkColors';
import { lightColors } from '../../styles/components/Modes/LightColors';
import { ModeContext } from '../../Context/ModeContext';
export default function StackNavigation(){

    const Stack = createStackNavigator();
    const {darkTheme, toggle} = useContext(ModeContext);
  return (
    <Stack.Navigator screenOptions={() => ({
        headerStyle:{
          backgroundColor:darkTheme?darkColors.darkBackgrd:lightColors.lightBackgrd
        },
        headerLeft:null,
        headerRight:()=><Image source={require('../../../assets/CashTransferImages/logo.png')}>
            </Image>

      
    
    })}
    initialRouteName="CashTransfer"
    
    >
   
      <Stack.Screen name="CashTransfer" component={CashTransfer} 
      options={({navigation }) => ({
        headerTitle: () => <Header navigation={navigation}/>,

        
      })
      
    
    
    }
 
      
      />
      <Stack.Screen name="OtpValidation" component={OtpValidation} 
      options={({navigation }) => ({
        headerTitle: () => <Header navigation={navigation}/>,
          
      })}
      
      />
       <Stack.Screen name="Main" component={HomeScreen} />
    </Stack.Navigator>
  );
}