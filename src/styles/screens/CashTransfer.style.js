
  import {
    StyleSheet
  } from 'react-native';
  
  
  export default styles = StyleSheet.create({
  
  
    container: {
        backgroundColor: '#F1F3FB',
        padding: 16,
        flex:1,
        flexGrow:1,
      },
      dropdown: {
        height: 65,
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 8,
        marginVertical:15,
        backgroundColor:"white",
        marginLeft:7,
        
        elevation:7,
       

      },
      
      label: {
        position: 'absolute',
        color:"black",
        left: 22,
        top: 60,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight:'700',
        elevation:9,
       
      },
      label2: {
        position: 'absolute',
        color:"black",
        left: 22,
        top: 155,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight:'700',
        elevation:9,
      },
      label3: {
        position: 'absolute',
        color:"black",
        left: 22,
        top: 250,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight:'700',
        elevation:9,
      },
      labeltext: {
        position: 'absolute',
        color:"black",
        left: 22,
        top: 345,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        fontFamily:'Roboto',
        fontWeight:'700',
        elevation:9,
      },
     
      placeholderStyle: {
        fontSize: 16,
       marginTop:15,
       fontFamily:'Roboto',
        fontWeight:'400',
        color:'#B7B7B7',
       
    
      },
      selectedTextStyle: {
        fontSize: 16,
        marginTop:15,
        fontFamily:'Roboto',
        fontWeight:'400',
        color:'#1C2437'
      },
    
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      textinput: {
        height: 65,
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 8,
        marginVertical:15,
        backgroundColor:"white",
        fontFamily:'Roboto',
        fontWeight:'400',
        fontSize:16,
        color:'#1C2437',
        textAlignVertical:'bottom',
        marginLeft:7,
        elevation:7,
    
    
        
      },
      textinput2: {
        height: 65,
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 8,
        marginVertical:15,
        backgroundColor:"white",
        fontFamily:'Roboto',
        fontWeight:'400',
        fontSize:16,
        color:'#1C2437',
        marginLeft:7,
        elevation:7,
        
    
    
        
      },
      transferText:{
        fontFamily:"Roboto",
        fontSize:20,
        lineHeight:24,
        color:'#1C2437',
        fontWeight:'700',
        marginLeft:7,
      },

      focusText:{
        borderColor: '#007236',
        borderStyle:"solid",
        borderWidth:2,
      },
      error:{
        borderColor:'red',
      },
      errorMessage:{
         color: 'red',
         textAlign:'center',
         
      },
      pressableView:{ 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
        alignItems: 'center' ,
      },

      
      textTransferPressable:{
         color: 'white', 
         textAlign: 'center',
         fontFamily:'Roboto',
         fontSize:16,
         fontWeight:'700',
      },

  
  
  });
  