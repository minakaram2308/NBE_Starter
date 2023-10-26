import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const Popup = (props) => {
  return (
    <Modal
      animationType="slide"
      visible={props.visible}
    >
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          {/* Your pop-up content goes here */}
          <Text>A new verification code was sent</Text>
          <TouchableOpacity onPress={props.onClose}>
            <Text>Close</Text>
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
    backdropFilter: "blur(17.760618209838867px)", 
    backgroundColor: "rgba(0, 0, 0, 0.02)"
  },
  popupContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default Popup;
