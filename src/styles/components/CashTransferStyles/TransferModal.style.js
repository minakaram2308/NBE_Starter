
import {
    StyleSheet
  } from 'react-native';
  
  
  export default styles = StyleSheet.create({
  

        centeredView: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        },
        modalOverlay: {
          flex: 1,
          backgroundColor: 'rgba(28, 36, 55, 0.77)',
          justifyContent: 'center',
          alignItems: 'center',
        },
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
      
        buttonOpen: {
          backgroundColor: '#F194FF',
        },
       
        textStyle: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        },
        Missioncomplete: {
         
          textAlign: 'center',
          fontFamily:'Roboto',
          fontSize:20,
          fontWeight:'700',
          color:'#1C2437',
        },
        TransferProcess:{
          marginBottom: 15,
          textAlign: 'center',
          fontFamily:'Roboto',
          fontSize:16,
          fontWeight:'400',
          color:'#B7B7B7'
        },
        pressableView:{  
          flexDirection: 'column', 
          justifyContent: 'flex-end', 
          alignItems: 'center',
         },
         pressableText:{ 
          width: 311,
          height: 50,
          borderRadius: 10,
          backgroundColor: '#007236',
          justifyContent: 'center',
          alignItems: 'center',
        },
   
  
  
  });
  