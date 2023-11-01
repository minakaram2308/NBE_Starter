import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import stylesSheet from './../styles/screens/SignUpScreen.style'

const Popup = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
    >
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          {/* Your pop-up content goes here */}
          <Text style = {{color:"#1C2437", fontWeight:"700", fontFamily: "Roboto", fontSize:20, paddingBottom:20}}>A new verification code was sent</Text>
          <TouchableOpacity onPress={props.onClose} style={stylesSheet.closeButton} >
            <Text style={{color:"white", fontSize:16, fontWeight:"700", fontFamily: "Roboto", textAlign:'center', paddingTop:9}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(28, 36, 55, 0.77)',
  },
  popupContent: {
    width: 280,
    padding: 25,
    backgroundColor: 'white',
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
});

export default Popup;
