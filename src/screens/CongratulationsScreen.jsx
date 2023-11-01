import React from 'react';
import {  
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  StatusBar
} from 'react-native';

import styles from './../styles/screens/SignUpScreen.style'

export const CongratulationsScreen = ({ navigation }) => {

    return(


   
 <ImageBackground
    source={require('../signupImages/success.png')}
    style={{flex:1, paddingTop:50, paddingHorizontal:24, backgroundColor:"#007236"}}
    imageStyle={{width:"85%", height:"85%", resizeMode: 'cover', position:"absolute", top:160, left:0}}
    >
            <StatusBar barStyle='dark-content' backgroundColor='#007236' />
            <View style={styles.finishFirstContainer}>
            <Image
        style={styles.finishLogo}
        source={require('../signupImages/logo2.png')}
      />  
            </View>

            <View style={styles.secContainer}>

            <View>
                <Text style={styles.congText}>Congratulations</Text>
                <Text style={styles.congText2}>You have successfully registered in NBE online banking service</Text>
            </View>
           <View>
           <TouchableOpacity 
             style={{ width: 345, height: 50, borderRadius: 10, backgroundColor: 'white', color:'green' }}
             onPress={ () => navigation.navigate('login')}
             >
            <Text style={styles.finishButton}>Finish</Text>
            </TouchableOpacity>
           </View>
            
            </View>
        
        </ImageBackground>


   
    );

}
