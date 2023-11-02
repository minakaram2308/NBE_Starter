import React from 'react';
import { useState, useRef, useEffect } from 'react';
import {  
  View,
  Image,
  Button,
  TouchableOpacity,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from 'react-native';

import styles from './../styles/screens/SignUpScreen.style'
import { useContext } from 'react';
import { ModeContext } from '../Context/ModeContext';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { lightColors } from '../styles/components/Modes/LightColors';
export const SignUpScreen = ({ navigation }) => {

  const [isDisabled, setIsDisabled] = useState(true);
  const [mobileValue, setMobileValue] = useState("+20 ");
  const [border, setBorder] = useState(true)
  const maxLength = 14;
  const inputRef = useRef(null);
  const {darkTheme, toggle} = useContext(ModeContext);

  
    useEffect(() => {
      // Focus on the TextInput when the component mounts
      inputRef.current.focus();
    }, []);

  const handlePress = () => {
    // Your custom logic here
    navigation.navigate('verification', {
      phoneNumber: mobileValue
    });
    console.log('TouchableOpacity pressed');
  };

  const changeBorder = () =>{
    setBorder(true);
  }

  const checkMobileNumber = (value) => {
    setMobileValue(value);
    if(value.length === 14){

      setIsDisabled(false)
      console.log("NEXT")
    }
    else{
      setIsDisabled(true)
    }
    console.log(value)
  }

    return(

      <TouchableWithoutFeedback onPress={
        ()=>{
          Keyboard.dismiss();
          setBorder(false);
        }
      }>

        

        <View style={[styles.background,{backgroundColor:darkTheme?darkColors.darkBackgrd:lightColors.lightBackgrd}]}>
        <StatusBar barStyle='dark-content' backgroundColor='#F1F3FB' />
            <View style={styles.firstContainer}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>    
            <Image
        style={styles.logo}
        source={require('../signupImages/logo.png')}
      />
            </View>

            <View style={styles.secContainer}>

            <View>
            <Text style={[styles.mobileTxt1,{color:darkTheme?darkColors.darkText:lightColors.lightText}]}>Mobile number</Text>
            <Text style={styles.desText}>Enter the mobile number registred in the bank</Text>
            <View style={border? styles.mobInput : styles.mobInputFalse}>

            <View style={styles.mobLogoContainer}>
            <Image
        style={styles.mobLogo}
        source={require('../signupImages/mobile.png')}
      />
            </View>

            <View>
              <Text style={styles.mobileTxt2}>
              Mobile number
              </Text>
              <TextInput value={mobileValue}
               onChangeText={checkMobileNumber}
               keyboardType="numeric"
               maxLength={maxLength}
               autoFocus={true}
               ref={inputRef}
               onFocus={changeBorder}
               style={styles.textInput}/>
            </View>

            </View>

            </View>

            <View>
            <TouchableOpacity disabled={isDisabled}
             style={{ width: 345, height: 50, borderRadius: 10, backgroundColor: isDisabled ? 'gray' : '#007236' }}
             onPress={isDisabled ? null : handlePress}>
            <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>  

            <Text style={styles.policyText} >
            By signing up, you agree to our <Text style={styles.policyTextBold} >Terms of Service</Text> and
            acknowledge that you have read our <Text style={styles.policyTextBold} >Privacy Policy</Text>.
            </Text>
            </View>

            </View>
        </View>
      </TouchableWithoutFeedback>
    );

}
