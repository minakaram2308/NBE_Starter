import React, {useState,useContext} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Balance, More, SendMoney} from './../components';
import { ModeContext } from '../context/ModeContext';
import {HomePageFooter} from './HomePageFooter';
import Card from '../components/Card';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { lightColors } from '../styles/components/Modes/LightColors';
export const PreviewHomeScreen = ({navigation}) => {
  const {darkTheme, toggle} = useContext(ModeContext);
  let backgroundStyle=darkTheme?darkColors.darkBackgrd:lightColors.lightBackgrd
  let textStyle=darkTheme?darkColors.darkText:lightColors.lightText
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
    <View style={[styles.container,{backgroundColor:backgroundStyle}]}>
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
          <SendMoney textStyle={textStyle} />
        </>
      )}
      <HomePageFooter textStyle={textStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
