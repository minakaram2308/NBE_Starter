import React, { useState,useEffect } from 'react';
import {  TextInput, View, Text,Pressable,StatusBar,TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {useRoute} from '@react-navigation/native';
import TransferModal from './TransferModal';
import CountdownTimer from './CountdownTimer';
import ErrorModal from './ErrorModal';
import styles from '../../styles/components/CashTransferStyles/OtpValidation.style';
export default function OtpValidation({navigation}) {
    
    const [confirm, setConfirm] = useState(null);
  

  const[confirm2,setconfirm2]=useState('');
  const route=useRoute();
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [err,seterr]=useState('');
 const {confirmation,phoneNumber}=route.params;
 useEffect(() => {
    setConfirm(confirmation);
    navigation.getParent().setOptions({tabBarStyle:{display:"none"}});
  }, []); 
         console.log("confirm is"+confirm);
  const handleTextInputChange = (text, index) => {
    const updatedConfirm = [...confirm2]; 
    updatedConfirm[index] = text; 
    setconfirm2(updatedConfirm.join('')); 
     
  };
 

  
  async function confirmCode() {
    setShowErrorModal(false);
    console.log(confirm2.length);
    if (confirm) {
      try {
        
        await confirm.confirm(confirm2);
    
       setShowModal(true);
      
        console.log("success");
      } catch (error) {
        console.log('Error occurred while confirming code:', error);
       
        setShowErrorModal(true);
        console.log('show error modal is'+showErrorModal);
        seterr(error.toString());
       
      }
    } else {
      console.log('No confirmation object available. Please sign in with a phone number first.');
      
    }
   
  }



  return (
   <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.viewContainer}>
    <Text style={styles.otpText}>OTP</Text>
    <Text style={styles.validation}>Enter 5 digit code we sent to {phoneNumber}</Text>
<View  style={styles.otpContainer}>
<TextInput maxLength={1}   style={{elevation:7,borderWidth:2,borderRadius:10,width:45,height:65,textAlign:'center',margin:10,borderColor: confirm2[0] ? '#007236' : 'white',backgroundColor:"white",fontFamily:"Roboto",fontWeight:"700",fontSize:25,color:'#1C2437'}} onChangeText={text =>{ handleTextInputChange(text, 0);if(text!==''){pin2.focus()}}}   keyboardType='numeric'  ref={(ref) => (pin1 = ref)}/>
<TextInput maxLength={1} style={{elevation:7,borderWidth:2,borderRadius:10,width:45,height:65,textAlign:'center',margin:10,borderColor: confirm2[1] ? '#007236' : 'white',backgroundColor:"white",fontFamily:"Roboto",fontWeight:"700",fontSize:25,color:'#1C2437'}} onChangeText={text => {handleTextInputChange(text, 1);if(text!==''){pin3.focus()}}}  keyboardType='numeric' ref={(ref) => (pin2 = ref)}/>
<TextInput maxLength={1} style={{elevation:7,borderWidth:2,borderRadius:10,width:45,height:65,textAlign:'center',margin:10,borderColor: confirm2[2] ? '#007236' : 'white',backgroundColor:"white",fontFamily:"Roboto",fontWeight:"700",fontSize:25,color:'#1C2437'}} onChangeText={text => {handleTextInputChange(text, 2);if(text!==''){pin4.focus()}}}  keyboardType='numeric'  ref={(ref) => (pin3 = ref)}/>
<TextInput maxLength={1} style={{elevation:7,borderWidth:2,borderRadius:10,width:45,height:65,textAlign:'center',margin:10,borderColor: confirm2[3] ? '#007236' : 'white',backgroundColor:"white",fontFamily:"Roboto",fontWeight:"700",fontSize:25,color:'#1C2437'}} onChangeText={text => {handleTextInputChange(text, 3);if(text!==''){pin5.focus()}}}  keyboardType='numeric'  ref={(ref) => (pin4 = ref)}/>
<TextInput maxLength={1} style={{elevation:7,borderWidth:2,borderRadius:10,width:45,height:65,textAlign:'center',margin:10,borderColor: confirm2[4] ? '#007236' : 'white',backgroundColor:"white",fontFamily:"Roboto",fontWeight:"700",fontSize:25,color:'#1C2437'}} onChangeText={text => {handleTextInputChange(text, 4);if(text!==''){pin6.focus()}}}  keyboardType='numeric'  ref={(ref) => (pin5 = ref)}/>
<TextInput maxLength={1} style={{elevation:7,borderWidth:2,borderRadius:10,width:45,height:65,textAlign:'center',margin:10,borderColor: confirm2[5] ? '#007236' : 'white',backgroundColor:"white",fontFamily:"Roboto",fontWeight:"700",fontSize:25,color:'#1C2437'}} onChangeText={text => handleTextInputChange(text, 5)}  keyboardType='numeric'  ref={(ref) => (pin6 = ref)}/>

</View>

<CountdownTimer navigation={navigation} phoneNumber={phoneNumber}/>



<View style={styles.pressableView}>
      <StatusBar backgroundColor='#F1F3FB'/>

   

      
  <TouchableOpacity
    style={{
      width: 345,
      height: 50,
      borderRadius: 10,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: (confirm2.length==6)?'#007236':'#D3D3D3',
    }}
    disabled={confirm2.length!=6}
    onPress={() => confirmCode()}
  >
    <Text style={styles.submitText}>Submit</Text>
  </TouchableOpacity>
 
 
</View>


{showModal && <TransferModal navigation={navigation}/>}
{showErrorModal && <ErrorModal error={err} modalopen={true}/>}
    </View>

    </TouchableWithoutFeedback>
   
  );
}
