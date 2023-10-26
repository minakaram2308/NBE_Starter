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
  Keyboard
} from 'react-native';

import Popup from './Popup'; 
import styles from './../styles/screens/SignUpScreen.style'

export const VerificationScreen = ({ route, navigation}) => {

  const [isDisabled, setIsDisabled] = useState(true);
  const [receive, setReceive] = useState(true);
  const [timer, setTimer] = useState(true);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [code, setCode] = useState("");
  const [border, setBorder] = useState(false)
  const maxLength = 1;
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const {phoneNumber} = route.params;
  const initialSeconds = 15; 
  const [seconds, setSeconds] = useState(initialSeconds);
  const [popupVisible, setPopupVisible] = useState(false);
  const [result, setResult] = useState("");
  const [inputValues, setInputValues] = useState(['', '', '', '', '']);
  const allInputsFilled = inputValues.every(value => value.length === maxLength);

  const openPopup = () => {
    generateRandomNumberString();
    setPopupVisible(true);
  };

  const closePopup = () => {
    setSeconds(initialSeconds);
    setPopupVisible(false);
    setReceive(true);
    setTimer(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if(seconds === 0){
        setTimer(false);
        setReceive(false);
      }
    }, 1000);

    return () => {
      clearInterval(timer)
    };
  }, [seconds]);
  var res ="";
  function generateRandomNumberString() {
    
    const charset = '0123456789';
    
  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      res += charset[randomIndex];
    }
    setResult(res)
    
  }
  
    useEffect(() => {
      // Focus on the TextInput when the component mounts
      generateRandomNumberString();
      inputRef1.current.focus();
      console.log("The verification code is: "+res);
    },[]);

  const handlePress = () => {
    // Your custom logic here
    navigation.navigate('password');
    console.log('TouchableOpacity pressed');
  };

  const changeBorder = () =>{
    setBorder(true);
  }

  const checkInput = (value) => {
    console.log("here"+value)
    if(code === result){
      setIsDisabled(false)
    }
    else{
      setIsDisabled(true)
    }
  }

  const handleInputChange = (value, index) => {
    var entered = false;
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);

  

  if (index == 4) {
    const enteredNumbers = inputValues.map(value => Number(value));
    enteredNumbers[4] = value;
    const code = enteredNumbers.join('');
    console.log(code +" "+result)
    if(code === result){
      setIsDisabled(false);
      entered=true;
   }
  }
 
  if(code !== result && !entered){
    setIsDisabled(true)
  }
  entered = false;
  }

    return(

      <TouchableWithoutFeedback onPress={
        ()=>{
          Keyboard.dismiss();
          setBorder(false);
        }
      }>
        <View style={styles.background}>
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
            <Text style={styles.mobileTxt1}>Verification</Text>
            <Text style={styles.desText}>Enter 5 digit code we sent to {phoneNumber}</Text>
           
            <View style={styles.verificationContainer}>

            <View style={border? styles.verificationBox : styles.verificationBoxFalse}>
            <TextInput value={inputValues[0]}
               onChangeText={(text) => { handleInputChange(text, 0); inputRef2.current.focus();}}
               keyboardType="numeric"
               maxLength={maxLength}
               autoFocus={true}
               ref={inputRef1}
               onFocus={changeBorder}
               style={styles.verificationTextInput}/>
            </View>
            
            <View style={border? styles.verificationBox : styles.verificationBoxFalse}>
            <TextInput value={inputValues[1]}
               onChangeText={(text) => { handleInputChange(text, 1); inputRef3.current.focus();}}
               keyboardType="numeric"
               maxLength={maxLength}
               autoFocus={true}
               ref={inputRef2}
               onFocus={changeBorder}
               style={styles.verificationTextInput}/>
            </View>

            <View style={border? styles.verificationBox : styles.verificationBoxFalse}>
            <TextInput value={inputValues[2]}
               onChangeText={(text) => { handleInputChange(text, 2); inputRef4.current.focus();}}
               keyboardType="numeric"
               maxLength={maxLength}
               autoFocus={true}
               ref={inputRef3}
               onFocus={changeBorder}
               style={styles.verificationTextInput}/>
            </View>

            <View style={border? styles.verificationBox : styles.verificationBoxFalse}>
            <TextInput value={inputValues[3]}
               onChangeText={(text) => { handleInputChange(text, 3); inputRef5.current.focus();}}
               keyboardType="numeric"
               maxLength={maxLength}
               autoFocus={true}
               ref={inputRef4}
               onFocus={changeBorder}
               style={styles.verificationTextInput}/>
            </View>

            <View style={border? styles.verificationBox : styles.verificationBoxFalse}>
            <TextInput value={inputValues[4]}
               onChangeText={(text) => { handleInputChange(text, 4)}}
               keyboardType="numeric"
               maxLength={maxLength}
               autoFocus={true}
               ref={inputRef5}
               onFocus={changeBorder}
               style={styles.verificationTextInput}/>
            </View>

            </View>

            <TouchableOpacity onPress={openPopup}>
              <Text style={receive? styles.codeText : styles.codeTextFalse}>Didn’t receive the code?</Text>
              </TouchableOpacity>
              <Popup visible={popupVisible} onClose={closePopup} />
            <Text style={timer? styles.timer : styles.timerFalse}>Request new one in 00:{seconds}</Text>

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
