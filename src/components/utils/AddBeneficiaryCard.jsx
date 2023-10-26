import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

function AddBeneficiaryCard(props) {
  return (
    <>
      <View style={[styles.rootContainer]}>
      <View style={styles.CardContainer}>
          <Text style={styles.label}>{props.label}</Text>
          <TextInput style={styles.TextInput} />
        </View>
      </View>
    </>
  );
}

export default AddBeneficiaryCard;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
  },
  CardContainerr: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 8,
    marginTop: 20,
  },
  label: {
    padding: 8,
    fontWeight: 'bold',
  },
  TextInput: {    
  },
});
