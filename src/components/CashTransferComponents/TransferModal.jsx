import React, { useState } from 'react';
import { Modal, Text, Pressable, View,StatusBar,Image } from 'react-native';
import styles from '../../styles/components/CashTransferStyles/TransferModal.style';

const TransferModal = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);
  
  return (
    <View style={styles.centeredView}>
      <StatusBar backgroundColor={modalVisible?'rgba(28, 36, 55, 0.77)':'#F1F3FB'} />
      <Modal
        animationType="fade" // Use fade animation
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Image source={require('../../../assets/CashTransferImages/MaskGroup5.png')}></Image>
            <Text style={styles.Missioncomplete}>Mission Complete</Text>
            <Text style={styles.TransferProcess}>Transfer process was successful</Text>
            <View style={styles.pressableView}>
            <Pressable
              style={styles.pressableText}
              onPress={() => {setModalVisible(!modalVisible)
                navigation.navigate('Main');
              
              
              }}
            >
              <Text style={styles.textStyle}>Finish</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TransferModal;


