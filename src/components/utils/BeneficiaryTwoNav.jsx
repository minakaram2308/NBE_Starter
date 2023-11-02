import React, { useContext } from 'react';
import {Pressable} from 'react-native';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PressableNavItem from './PressableNavItem';
import { ModeContext } from '../../Context/ModeContext';
import { darkColors } from '../../styles/components/Modes/DarkColors';
import { lightColors } from '../../styles/components/Modes/LightColors';
function BeneficiaryTwoNav({navigation}) {
  const {darkTheme, toggle} = useContext(ModeContext);
  let  styles = darkTheme ? darkColors.darkBackgrd : lightColors.lightBackgrd

    function onPressFunction() {
        navigation.navigate("beneficiaries")
    }

  return (
    <View style={[style.rootContainer, {backgroundColor: styles}]}>
    <View style={style.navContainer}>
        <View style={{flexDirection: 'row'}}>
          <PressableNavItem
            onPress={onPressFunction}
            android_ripple={{color: 'black'}}
            color="#007236">
            <Icon name="left" size={20} color="white"></Icon>
          </PressableNavItem>
          <PressableNavItem
            onPress={onPressFunction}
            android_ripple={{color: 'black'}}
            color="#E5E5E5">
            <Image source={require('../../images/Vector.png')} />
          </PressableNavItem>
        </View>
        <Image
          source={require('../../images/logo.png')}
          style={style.logoContainer}
        />
      </View>
    </View>
  );
}

export default BeneficiaryTwoNav;

const style = StyleSheet.create({
    rootContainer: {
      // marginTop: 20,
      paddingTop: 20,
      paddingHorizontal: 20,
      
    },
    navContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    logoContainer: {
      width: '50%',
      resizeMode: 'contain',
    },
  });
