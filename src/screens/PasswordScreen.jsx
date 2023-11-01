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

export const PasswordScreen = ({ navigation }) => {

  const [isDisabled, setIsDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [border, setBorder] = useState(true)
  const [border1, setBorder1] = useState(false)
  const [editable, setEditable] = useState(false)
  const [secure, setSecure] = useState(true)
  const [secure1, setSecure1] = useState(true)
  const maxLength = 14;
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const [lowercase, setLowercase] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [number, setNumber] = useState(false)
  const [specialChar, setSpectialChar] = useState(false)
  const [secondPassword, setSecondPassword] = useState(false)
  
    useEffect(() => {
      // Focus on the TextInput when the component mounts
      inputRef.current.focus();
    }, []);

  const handlePress = () => {
    // Your custom logic here
    navigation.navigate('congratulations');
    console.log('TouchableOpacity pressed');
  };

  const changeBorder = () =>{
    setBorder(true);
  }

  const changeBorder1 = () =>{
    setBorder1(true);
    setBorder(false)
  }


  const validatePassword = (inputPassword) => {
    // Check for uppercase
    setUppercase(/[A-Z]/.test(inputPassword));

    // Check for lowercase
    setLowercase(/[a-z]/.test(inputPassword));

    // Check for digit
    setNumber(/\d/.test(inputPassword));

    // Check for special character
    setSpectialChar(/[@$!%*?&#]/.test(inputPassword));

    // Check for minimum length
    setCharacters(inputPassword.length >= 8);

    if(uppercase && lowercase && number && specialChar && characters){
      inputRef1.current.focus();
      setBorder1(true)
      setEditable(true)
      setBorder(false)
      
    }

  };

  const unLockPassword = () =>{
    if(secure){
      setSecure(false);
      console.log(false)
    }
    else{
      setSecure(true);
      console.log(true)
    }
  }

  const unLockPassword1 = () =>{
    if(secure1){
      setSecure1(false);
      console.log(false +"1")
    }
    else{
      setSecure1(true);
      console.log(true +"1")
    }
  }

  const checkPassword = (text) => {
      if(text === password){
        setIsDisabled(false)
      }
      else{
        setIsDisabled(true)
      }
  }

    return(

      <TouchableWithoutFeedback onPress={
        ()=>{
          Keyboard.dismiss();
          setBorder(false);
          setBorder1(false)
        }
      }>
        <View style={styles.background}>
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
            <Text style={styles.mobileTxt1}>Set your password</Text>
            <Text style={styles.desText}>Enter a strong password for your online banking account</Text>

            <View style={border? styles.mobInput : styles.mobInputFalse}>

            <View style={styles.mobLogoContainer}>
            <Image
        style={styles.mobLogo}
        source={require('../signupImages/lock.png')}
      />
            </View>

            <View>
              <Text style={styles.mobileTxt2}>
              Password
              </Text>
              <TextInput value={password}
               onChangeText={(text) => {
                setPassword(text);
                validatePassword(text);
                editable? inputRef1.current.focus() : inputRef.current.focus(); 
              }}
               secureTextEntry={secure}
               maxLength={maxLength}
               autoFocus={true}
               ref={inputRef}
               onFocus={changeBorder}
               style={styles.textInput}/>
            </View>

            <View style={styles.viewPassword}>
<TouchableOpacity onPress={unLockPassword}>
<Image
style={styles.viewPasswordLogo}
source={require('../signupImages/Vector.png')}
/>
        </TouchableOpacity>

</View>

            </View>

            <View style={border1? styles.mobInput : styles.mobInputFalse}>

<View style={styles.mobLogoContainer}>
<Image
style={styles.mobLogo}
source={require('../signupImages/lock.png')}
/>
</View>

<View>
  <Text style={secondPassword? styles.mobileTxt2:styles.mobileTxt2Grey}>
  Confirm Password
  </Text>
  <TextInput value={confirmPassword}
   onChangeText={(text) => {setConfirmPassword(text); checkPassword(text);}}
   secureTextEntry={secure1}
   maxLength={maxLength}
   ref={inputRef1}
   editable={editable}
   onFocus={changeBorder1}
   placeholder='Re-Write your password here'
   style={styles.textInput}/>
</View>

<View style={styles.viewPassword}>
<TouchableOpacity onPress={unLockPassword1}>
<Image
style={styles.viewPasswordLogo}
source={require('../signupImages/Vector.png')}
/>
        </TouchableOpacity>

</View>
            </View>

            <View style={styles.conditionsContainer}>
            <View style={styles.checksContainer}>
              <View style={styles.check}>
                <View style={lowercase? styles.circle:styles.circleGray}></View>
                <Text style={styles.checkText}>Lower case letter</Text>
              </View>
              <View style={styles.check}>
                <View style={characters? styles.circle:styles.circleGray}></View>
                <Text style={styles.checkText}>Minimum 8 characters</Text>
              </View>
              <View style={styles.check}>
                <View style={specialChar? styles.circle:styles.circleGray}></View>
                <Text style={styles.checkText}>Special character</Text>
              </View>
            </View>
            <View style={styles.checksContainer}>
            <View style={styles.check}>
                <View style={uppercase? styles.circle:styles.circleGray}></View>
                <Text style={styles.checkText}>Upper case letter</Text>
              </View>
              <View style={styles.check}>
                <View style={number? styles.circle:styles.circleGray}></View>
                <Text style={styles.checkText}>Number</Text>
              </View>
            </View>
            </View>

            </View>

            <View>
            <TouchableOpacity disabled={isDisabled}
             style={{ width: 345, height: 50, borderRadius: 10, backgroundColor: isDisabled ? 'gray' : '#007236' }}
             onPress={isDisabled ? null : handlePress}>
            <Text style={styles.nextButtonText}>Submit</Text>
            </TouchableOpacity>  

            </View>

            </View>
        </View>
      </TouchableWithoutFeedback>
    );

}
