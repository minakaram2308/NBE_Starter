import React from "react";
import {View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from '../../styles/components/CashTransferStyles/Header.style';
export default function Header({navigation}){
   
   return(
    <View style={styles.header1}>
    <View style={styles.header2}>
      <FontAwesome5 name={'angle-left'} color={'white'} size={30} onPress={()=>navigation.goBack()} style={styles.icon}/>
    </View>
  </View>
   );


}