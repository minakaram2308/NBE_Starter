import React,{useContext, useEffect} from 'react';
import {Pressable, ScrollView} from 'react-native';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PressableNavItem from '../components/utils/PressableNavItem';
import BeneficiaryTwoNav from '../components/utils/BeneficiaryTwoNav';
import AddBeneficiaryCard from '../components/utils/AddBeneficiaryCard';
import AddBeneficiaryForm from '../components/utils/AddBeneficiaryForm';
import { darkColors } from '../styles/components/Modes/DarkColors';
import { lightColors } from '../styles/components/Modes/LightColors';
import { ModeContext } from '../Context/ModeContext';
const {width, height} = Dimensions.get('window');

export function AddBeneficiarScreen({navigation}) {
  const {darkTheme, toggle} = useContext(ModeContext);
  let  style = darkTheme ? darkColors.darkBackgrd : lightColors.lightBackgrd
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={[styles.rootContainer, {backgroundColor: style}]}>
        <BeneficiaryTwoNav navigation={navigation} />
        <View style={styles.CameraContainer}>
          <Image source={require('../images/camera.png')} />
        </View>
        <AddBeneficiaryForm ></AddBeneficiaryForm>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    backgroundColor: '#F1F3FB',
    flex: 1,
  },
  CameraContainer: {
    width: 138,
    height: 138,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 4,
    marginTop: 15,
    marginLeft: width / 3,
    borderRadius: 24,
  },
});
const darkStyles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    backgroundColor:'rgb(25, 26, 25)',
    flex: 1,
  },
  CameraContainer: {
    width: 138,
    height: 138,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 4,
    marginTop: 15,
    marginLeft: width / 3,
    borderRadius: 24,
  },
});
