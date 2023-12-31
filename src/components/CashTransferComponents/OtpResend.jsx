import React from "react";
import firebasesetup from '../../setup';
const { auth } = firebasesetup();
  const OtpResend = async ({navigation,phoneNumber}) => {
    try {
      
     
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber, null);
      console.log("Confirmation is", confirmation);
      navigation.navigate('OtpValidation',{confirmation,phoneNumber});
    } catch (error) {
      console.log('Error occurred while signing in with phone number:', error);
    }
  };
  export default OtpResend;