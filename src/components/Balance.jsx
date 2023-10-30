import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './../styles/components/Balance.style';

export const Balance = () => {
  return (
    <View style={{height: 132, flexDirection: 'row', padding: 0,marginVertical:5}}>
      <ImageBackground
        style={styles.balance}
        source={require('../../assets/media/creditcard.png')}>
        <View style={styles.header}>
          <Text style={styles.title}>Balance</Text>
          <View>
          <Icon name="fingerprint" size={27}  color={'#F6A721'}/>
        </View>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>$1,568,983.25</Text>
        </View>

      </ImageBackground>
    </View>
  );
};
