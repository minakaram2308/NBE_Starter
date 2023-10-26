import React from 'react';
import {Pressable, ScrollView} from 'react-native';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import PressableNavItem from '../components/utils/PressableNavItem';
import BeneficiaryTwoNav from '../components/utils/BeneficiaryTwoNav';
import AddBeneficiaryCard from '../components/utils/AddBeneficiaryCard';
import AddBeneficiaryForm from '../components/utils/AddBeneficiaryForm';
const {width, height} = Dimensions.get('window');
function AddBeneficiarScreen() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.rootContainer}>
        <BeneficiaryTwoNav></BeneficiaryTwoNav>
        <View style={styles.CameraContainer}>
          <Image source={require('../images/camera.png')} />
        </View>
        <AddBeneficiaryForm></AddBeneficiaryForm>
      </View>
    </ScrollView>
  );
}

export default AddBeneficiarScreen;

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
