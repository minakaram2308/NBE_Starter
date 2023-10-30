import React from "react";
import {View,Text, Button} from 'react-native';


export default function Main({navigation}){
    return(
        <View style={{flex:1,alignItems: 'center', justifyContent: 'center' }}>
           
            <Button title='cash transfer' onPress={()=>{navigation.navigate('CashTransfer')}}/>
        </View>

    );



}
