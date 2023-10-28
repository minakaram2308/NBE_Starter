import React, { useContext } from 'react';
import { View,Text,StyleSheet,Image ,Dimensions, Pressable} from 'react-native';
function SuccessModal(props){
  //const mode=useContext(ThemeContext)

  const allstyles=(props.mode)?darkStyles:lightStyles
  const windowWidth = Dimensions.get('window').width;
    
    return(
        <View style={{width:windowWidth*.95}}>
            <View style={allstyles.modalView}>
            <Image source={require('../../../assets/media/airPay/successCard.png')}></Image>
            <Text style={allstyles.modalText1}>Mission Complete</Text>
            <Text style={allstyles.modalText2}>Your payment to IKEA was successful</Text>
            <Text style={allstyles.modalText3}>$5,542.00</Text>
            <Pressable onPress={props.closeMe}>
            <View style={{backgroundColor:'#007236', marginTop:20,width:windowWidth*.95*.8,borderRadius:12.5 }}>
                <Text style={{color:'#FFFFFF',alignSelf:'center',fontWeight:'700',fontSize:16,padding:12}}>Done</Text>
            </View>
            </Pressable>
        </View>
      </View>
    )
}
export default SuccessModal

const lightStyles = StyleSheet.create({
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText1: {
      fontWeight:'700',
      marginVertical:5,
      fontSize:20,
      textAlign: 'center',
      color:'#1C2437'
    },
    modalText2: {
      fontWeight:'700',
      fontSize:16,
      textAlign: 'center',
      color:'#B7B7B7'
    },
    modalText3: {
      fontWeight:'700',
      marginVertical:5,
      fontSize:40,
      textAlign: 'center',
      color:'#1C2437'
    },
  })


  const darkStyles = StyleSheet.create({
    modalView: {
      margin: 20,
      backgroundColor: 'black',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText1: {
      fontWeight:'700',
      marginVertical:5,
      fontSize:20,
      textAlign: 'center',
      color:'white'
    },
    modalText2: {
      fontWeight:'700',
      fontSize:16,
      textAlign: 'center',
      color:'#B7B7B7'
    },
    modalText3: {
      fontWeight:'700',
      marginVertical:5,
      fontSize:40,
      textAlign: 'center',
      color:'white'
    },
  })