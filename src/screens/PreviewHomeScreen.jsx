import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Balance, More, SendMoney} from './../components';

import {HomePageFooter} from './HomePageFooter';
import Card from '../components/Card';
export const PreviewHomeScreen = ({navigation}) => {
  // console.log(navigation.toggleDrawer);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardData = {
    id: 1,
    type: 'green',
    balance: '12,252,12',
    name: 'Ahmed Mohamed',
    cvv: '456',
    expires: '12/25',
    cardNumber: '9654',
  };

  function BalancePressedHandler() {
    setIsCardVisible(!isCardVisible);
  }

  return (
    <View style={styles.container}>
      {isCardVisible ? (
        <TouchableOpacity onPress={BalancePressedHandler}>
          <Card lower={1} data={cardData} />
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity onPress={BalancePressedHandler}>
            <Balance />
          </TouchableOpacity>
          <More navigation={navigation} />
          <SendMoney />
        </>
      )}
      <HomePageFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
