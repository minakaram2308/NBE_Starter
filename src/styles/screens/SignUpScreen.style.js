import {
    StyleSheet
  } from 'react-native';

  export default styles = StyleSheet.create({
    background: {
        backgroundColor: '#F1F3FB',
        flex:1,
        paddingTop:16,
        paddingHorizontal:24
    },
    logo:{
    width: 160,
    height: 38.669,
    resizeMode:'contain'
    },
    firstContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent: 'space-between'
    },
    backButton:{
      backgroundColor: '#007236',
      width: 40,
      height: 40,
      borderRadius: 10
    },
    buttonText: {
      color: 'white',
      fontSize: 24,
      textAlign: 'center'
    },
    mobileTxt1:{
      color: '#1C2437',
      fontFamily: 'Roboto',
      fontSize: 20,
      fontWeight: "700"
    },
    desText:{
      color: "#B7B7B7",
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: "400",
    },
    secContainer:{
      paddingTop:30,
      flex:1,
      justifyContent:"space-between",
      paddingBottom:25
    },
    mobInput:{
      paddingTop:11,
      paddingHorizontal:25,
      marginTop:20,
      width: 346,
      height: 65,
      borderRadius: 10,
      borderWidth: 1.5,    
      borderColor: '#007236',     
      borderStyle: 'solid', 
      backgroundColor: "#FFF",
      flexDirection:'row'
    },
    mobInputFalse:{
      paddingTop:11,
      paddingHorizontal:25,
      marginTop:20,
      width: 346,
      height: 65,
      borderRadius: 10,
      backgroundColor: "#FFF",
      flexDirection:'row'
    },
    mobileTxt2:{
      color: "#007236",
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: "700",
    },
    mobileTxt2Grey:{
      color: "#B7B7B7",
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: "700",
    },
    mobLogo:{
      width:15,
      height:23,
      resizeMode:'contain'
    },
    mobLogoContainer:{
      paddingTop:11,
      paddingEnd:25
    },
    textInput:{
      marginBottom:15,
      width:250,
      fontSize:15
    },
    nextButton:{
      width: 345,
      height: 50,
      borderRadius: 10,
      backgroundColor: "#007236"
    },
    nextButtonText:{
      color:"white",
      textAlign:"center",
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "700",
      paddingTop:15
    },
    policyText:{
      color: "#808080",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: "400",
      paddingTop:25
    },
    policyTextBold:{
      color: "black",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: 14,
      fontWeight: "700",
    },
    verificationContainer:{
      flexDirection:"row",
      justifyContent:"space-between"
    },
    verificationBox:{
      paddingTop:11,
      paddingHorizontal:25,
      marginTop:20,
      width: 45,
      height: 65,
      borderRadius: 10,
      borderWidth: 1.5,    
      borderColor: '#007236',     
      borderStyle: 'solid', 
      backgroundColor: "#FFF",
      justifyContent: 'center',
      alignItems: 'center',
    },
    verificationBoxFalse:{
      paddingTop:11,
      paddingHorizontal:25,
      marginTop:20,
      width: 45,
      height: 65,
      borderRadius: 10,
      backgroundColor: "#FFF",
      justifyContent: 'center',
      alignItems: 'center',
    },
    codeText:{
      paddingTop:20,
      color: "#B7B7B7",
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: "400"
    },
    codeTextFalse:{
      paddingTop:20,
      color: "#1C2437",
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: "700"
    },
    timer:{
      color: '#1C2437',
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: "700"
    },
    timerFalse:{
      color: '#B7B7B7',
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: "400"
    },
    verificationTextInput:{
      width: 35,
      color: "black",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: 25,
      fontWeight: "700",
      alignSelf: 'center'
    },
    congratulationsBackground: {
      flex:1,
      backgroundColor:"#007236",
      paddingTop:16,
      paddingHorizontal:24,
    
    },
    circle:{
      width: 12,
      height: 12,
      backgroundColor:"#007236",
      borderRadius:50
    },
    circleGray:{
      width: 12,
      height: 12,
      backgroundColor:"#B7B7B7",
      borderRadius:50
    },
    check:{
     flexDirection:"row",
     alignItems:"center",
     paddingTop:20,
     paddingRight:30
    },
    checkText:{
      color: "#1C2437",
      fontFamily: "Roboto",
      fontSize: 15,
      fontWeight: "400",
      paddingStart:10
    },
    checksContainer:{
      flexDirection:"column",
      justifyContent:"flex-start",
    },
    conditionsContainer:{
      flexDirection:"row",
    },
    viewPassword:{
      paddingTop:25
    },
    viewPasswordLogo:{
      width:20,
      height:16,
      resizeMode:'contain'
    },
    finishLogo:{
    width: 346,
    height: 40,
    resizeMode:'contain'
    },
    finishFirstContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent: "flex-end"
    },
    congText:{
      color: "#F7F7F7",
      fontFamily: "Roboto",
      fontSize: 30,
      fontWeight: "700"
    },
    congText2:{
      color: "#F7F7F7",
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "400"
    },
    finishButton:{
      color:"#007236",
      textAlign:"center",
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "700",
      paddingTop:15
    },
    closeButton:{
      backgroundColor: '#007236',
      width: 80,
      height: 40,
      borderRadius: 10,
      
    }
  });