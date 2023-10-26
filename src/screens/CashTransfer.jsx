import React, { useState,useEffect } from 'react';
import {  Text, TextInput, View ,KeyboardAvoidingView,Pressable} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableWithoutFeedback,Keyboard,StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebasesetup from '../setup';
import styles from './../styles/screens/CashTransfer.style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const data1 = [
  { label: 'Between your accounts', value: '1' },
  { label: 'from your account to different account', value: '2' },
  { label: 'from debit to credit', value: '3' },
 
];
const data2 = [
    { label: '042-653214521245- $2,145,5874.25', value: '1' },
    { label: '042-653214521245- $2,145,5874.25', value: '2' },
    { label: '042-653214521245- $2,145,5874.25', value: '3' },
   
  ];
  const data3 = [
    { label: '056-32154875423- $1,523.48', value: '1' },
    { label: '056-32154875423- $1,523.48', value: '2' },
    { label: '056-32154875423- $1,523.48', value: '3' },
   
  ];

export const CashTransfer = ({navigation}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);
  const [value3, setValue3] = useState(null);
  const [isFocus3, setIsFocus3] = useState(false);
  const [textvalue, setTextValue] = useState('$');
  const [isFocustext, setIsFocustext] = useState(false);
  const [textvalue2, setTextValue2] = useState('');
  const [isFocustext2, setIsFocustext2] = useState(false);
  const [isDone,setIsDone]=useState(false);
  const[IsBlurtext1,setIsBlurtext1]=useState(false);
  const[IsBlurtext2,setIsBlurtext2]=useState(false);
  const { auth } = firebasesetup();
  const [errorMessagetext1, setErrorMessagetext1] = useState('');
  const [errorMessagetext2, setErrorMessagetext2] = useState('');
  const signInWithPhoneNumber = async (phone) => {
    try {
      
      const phoneNumber=phone;
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber, null);
      console.log("Confirmation is", confirmation);
       
       
      navigation.navigate('OtpValidation',{confirmation,phoneNumber});
    } catch (error) {
      console.log('Error occurred while signing in with phone number:', error);
    }
  };

  useEffect(() => {
    // Check if all Dropdowns and TextInput are filled
    if ((value && value2 && value3&&textvalue && textvalue2 !=='')&&(value && value2 && value3&&textvalue && textvalue2 !==null)&&(textvalue !== '$' && textvalue !==''&& textvalue2.length>=10)) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
    console.log(isDone);
  }, [value, value2, value3, textvalue,textvalue2]);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#007236' }]}>
          Type of transfer
        </Text>
      );
    }
    return (
        <Text style={[styles.label,{marginLeft:-4}]}> Type of transfer</Text>
    );
  };
  const renderLabel2 = () => {
    if (value2 || isFocus2) {
      return (
        <Text style={[styles.label2, isFocus2 && { color: '#007236' }]}>
           Transfer from
        </Text>
      );
    }
    return (
        <Text style={styles.label2}>Transfer from</Text>
    );
  };
  const renderLabel3 = () => {
    if (value3 || isFocus3) {
      return (
        <Text style={[styles.label3, isFocus3 && { color: '#007236' }]}>
         Transfer to
        </Text>
      );
    }
    return (
        <Text style={styles.label3}>Transfer to</Text>
    );
  };
  const renderLabeltext = () => {
    if (textvalue || isFocustext) {
      return (
        <Text style={[styles.labeltext, isFocustext && { color: '#007236' }]}>
          Amount to transfer
        </Text>
      );
    }
    return (
        <Text style={styles.labeltext}>Amount to transfer</Text>
    );
  };



  

  const handleBlurtext1=()=>{
    setIsFocustext(false);
    setIsBlurtext1(true);
    if(textvalue.length===1){
      setErrorMessagetext1(' this is a required field');
    }
    else{
      setErrorMessagetext1('');
    }
    
  
  
  
  }

const handleBlurtext2=()=>{
  setIsFocustext2(false);
  setIsBlurtext2(true);
  if(textvalue2.length<10){
    setErrorMessagetext2(' Text must be 10 or more characters');
  }
  else{
    setErrorMessagetext2('');
  }



}

  return (
  
    <KeyboardAvoidingView style={{flex:1}}>
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
   
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
    
   <View style={styles.container}>
  
    <StatusBar backgroundColor='#F1F3FB'/>
   
      
    <Text style={styles.transferText}>Transfer</Text>

      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && styles.focusText]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
     
      />
      {renderLabel2()}
      <Dropdown
        style={[styles.dropdown, isFocus2 && styles.focusText]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus2 ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value2}
        onFocus={() => setIsFocus2(true)}
        onBlur={() => setIsFocus2(false)}
        onChange={item => {
          setValue2(item.value);
          setIsFocus2(false);
        }}
     
      />
      {renderLabel3()}
      <Dropdown
        style={[styles.dropdown, isFocus3 && styles.focusText,]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data3}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus3 ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value3}
        onFocus={() => setIsFocus3(true)}
        onBlur={() => {setIsFocus3(false)
        
        
        }}
        onChange={item => {
          setValue3(item.value);
          setIsFocus3(false);
        }}
        
     
      />


      
      {renderLabeltext()}
      <TextInput
      style={[styles.textinput, isFocustext && styles.focusText,IsBlurtext1&&textvalue.length==1&&{borderColor:'#ff9494',borderWidth:2}]}
      keyboardType='numeric'
      onFocus={()=>{setIsFocustext(true)
        setIsBlurtext1(false);
        
      
      }}
      value={textvalue}
      onBlur={() =>{ 
        handleBlurtext1();
      }}
     
      onChangeText={(text) => {
        // Filter out non-numeric characters and update the state
        const numericText = text.replace(/[^0-9.,]/g, ''); // This regex removes non-numeric characters
    setTextValue('$' + numericText);
    setIsFocustext(true);
      }}
     
      
      />
      
      {errorMessagetext1&& textvalue.length==1 ? (
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <FontAwesome5 name={'exclamation-circle'} color={'red'} size={17}/>
        <Text style={styles.errorMessage}>{errorMessagetext1}</Text>
        </View>
      ) : null}
      


     
      <TextInput
      style={[styles.textinput2, isFocustext2 && styles.focusText,IsBlurtext2&&textvalue2.length<10&&{borderColor:'#ff9494',borderWidth:2}]}
      onFocus={()=>{setIsFocustext2(true)
      setIsBlurtext2(false);
      }}
      value={textvalue2}
      placeholder="Reason of Transfer"
      placeholderTextColor="#B7B7B7"     
      onBlur={handleBlurtext2}
    
      onChangeText={(text) => {setTextValue2( text)
        setIsFocustext2(true);
    }
     
      }
      />
     
     {errorMessagetext2 && textvalue2.length<10 ? (
       <View style={{flexDirection:'row',justifyContent:'center'}}>
       <FontAwesome5 name={'exclamation-circle'} color={'red'} size={17}/>
       <Text style={styles.errorMessage}>{errorMessagetext2}</Text>
       </View>
      ) : null}
    
  <View style={styles.pressableView}>
  <Pressable
    style={{
      width: 345,
      height: 50,
      borderRadius: 10,
      backgroundColor: isDone?'#007236':'#D3D3D3',
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      
    }}
    disabled={!isDone}
    onPress={()=>signInWithPhoneNumber('+201129908771')}
  >
    <Text style={styles.textTransferPressable}>Transfer</Text>
  </Pressable>
 
</View>


  
   

</View>
</KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
   
  );
};



