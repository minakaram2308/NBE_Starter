import React from 'react';
import { View,Text,StyleSheet ,Dimensions} from 'react-native';
 const Drop = (props) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={{width:windowWidth*.83,height:windowWidth*0.8*.65 ,alignContent:'center', justifyContent:'center',borderColor:'#007236',borderRadius:27,borderWidth:2,borderStyle:'dotted'}}>
        <View style={allstyles.sec1}>
            <Text style={allstyles.cardsText}>{ !props.choosedCard? "Touch & hold a card then drag it":"Double press here"}</Text>
            <Text style={allstyles.cardsText}>{ !props.choosedCard? "on this box":"to choose another card"}</Text>
        </View>
    </View>

  )
}

const allstyles = StyleSheet.create({
    sec1:{
        alignItems:'center'
    },
    cardsText:{
      color:'#007236C4',
      fontFamily:'roboto',
      fontWeight:'500',
      fontSize:20,
  }
})

export default Drop