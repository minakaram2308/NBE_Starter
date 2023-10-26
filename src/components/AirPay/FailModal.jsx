import React from 'react';
import { View,Text,StyleSheet,Image ,Dimensions, Pressable} from 'react-native';
function FailModal(props){
    const windowWidth = Dimensions.get('window').width;
    return(
        <View style={{width:windowWidth*.95}}>
            <View style={allstyles.modalView}>
            <Image source={require('../../../assets/media/airPay/failCard.png')}></Image>
            <Text style={allstyles.modalText1}>Ooops...</Text>
            <Text style={allstyles.modalText2}>Your payment didn’t go through</Text>
            <Text style={allstyles.modalText3}>$5,542.00</Text>
            <View style={allstyles.buttonsContainer}>
                <Pressable onPress={props.closeMe}>
                <View style={{width:windowWidth*.95*.8*.35,borderRadius:12.5,borderColor:'#EB001B',borderWidth:1,marginEnd:10 }}>
                    <Text style={{color:'#EB001B',alignSelf:'center',fontWeight:'700',fontSize:16,padding:12}}>Cancel</Text>
                </View>
                </Pressable>
                <Pressable onPress={props.closeMe}>
                <View style={{backgroundColor:'#007236',width:windowWidth*.95*.8*.5,borderRadius:12.5,marginStart:10 }}>
                    <Text style={{color:'#FFFFFF',alignSelf:'center',fontWeight:'700',fontSize:16,padding:12}}>Try Again</Text>
                </View>
                </Pressable>
            </View>

        </View>
      </View>

    )
}

export default FailModal


const allstyles = StyleSheet.create({
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
    buttonsContainer:{
        flexDirection:'row'
    },
    modalText1: {
      fontWeight:'700',
      marginVertical:5,
      fontSize:20,
      textAlign: 'center',
      color:'#EB001B'
    },
    modalText2: {
      fontWeight:'400',
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