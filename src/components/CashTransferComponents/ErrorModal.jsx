import React, { useEffect, useState } from 'react';
import { Modal, Text, Pressable, View,StatusBar,Image } from 'react-native';
import styles from '../../styles/components/CashTransferStyles/ErrorModel.style';
const ErrorModal=({error,modalopen})=>{
    const [modalVisible, setModalVisible] = useState(true);
    useEffect(() => {
      
      setModalVisible(modalopen);
      console.log('modal visible from modal'+modalVisible);
    }, [modalopen]); 
    return (
      <View style={styles.centeredView}>
        <StatusBar backgroundColor={modalVisible?'rgba(0, 0, 0, 0.7)':'#F1F3FB'} />
        <Modal
          animationType="slide" 
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <Image source={require('../../../assets/CashTransferImages/error.png')} style={styles.image} ></Image>
              <Text style={styles.Missioncomplete}>{error}</Text>
              <View style={styles.pressableView}>
              <Pressable
                style={styles.pressableText}
                  onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Try again</Text>
              </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

 







export default ErrorModal;