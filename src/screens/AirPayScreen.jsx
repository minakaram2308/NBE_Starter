import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
  Alert,
  Modal,
  Button,
} from 'react-native';
import RNRestart from 'react-native-restart';
import Draggable from 'react-native-draggable';
import Card from '../components/AirPay/Card';
import Drop from '../components/AirPay/Drop';
import SuccessModal from '../components/AirPay/SuccessModal';
import FailModal from '../components/AirPay/FailModal';
import {darkColors} from '../styles/components/Modes/DarkColors';
import {lightColors} from '../styles/components/Modes/LightColors';
import {ModeContext} from '../Context/ModeContext';
export const AirPayScreen = ({navigation}) => {
  const {darkTheme, toggle} = useContext(ModeContext);
  const windowWidth = Dimensions.get('window').width;
  const [enabled, setEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [successPay, setSuccessPay] = useState(false);
  const [activeDraggable, setActiveDraggable] = useState(false);
  const isDarkMode = darkTheme;

  const cardData = [
    {
      id: 1,
      balance: '12,252,2',
      cardNumber: '9654',
      name: 'Ahmed Essam Eldin',
      cvv: '456',
      expires: '02/26',
      type: 'green',
    },
    {
      id: 2,
      balance: '125,381,15',
      cardNumber: '2126',
      name: 'Mohamed Ahmed ',
      cvv: '445',
      expires: '11/01',
      type: 'red',
    },
    {
      id: 3,
      balance: '125,381,15',
      cardNumber: '4158',
      name: 'Omar Emad',
      cvv: '257',
      expires: '10/04',
      type: 'red',
    },
    {
      id: 4,
      balance: '125,381,15',
      cardNumber: '1111',
      name: 'Ahmed Essam Eldin',
      cvv: '710',
      expires: '02/26',
      type: 'green',
    },
  ];
  const [data, setData] = useState(cardData);
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View
      style={[
        allstyles.centeredView,
        {
          backgroundColor: darkTheme
            ? darkColors.darkBackgrd
            : lightColors.lightBackgrd,
        },
      ]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={[allstyles.modalContainer, {backgroundColor: '#1C2437C4'}]}>
          {successPay ? (
            <SuccessModal mode={isDarkMode} closeMe={closeModal} />
          ) : (
            <FailModal mode={isDarkMode} closeMe={closeModal} />
          )}
        </View>
      </Modal>
      <View style={{flex: 1}}>
        <View style={{flex: 4}}>
          <Text
            style={[
              allstyles.cardsText,
              {color: darkTheme ? darkColors.darkText : lightColors.lightText},
            ]}>
            Cards
          </Text>

          {/* <ThemeProvider>
    <Button title='Change' onPress={toggle}></Button>
  </ThemeProvider> */}

          <ScrollView scrollEnabled={!enabled} horizontal={true}>
            <View style={{flexDirection: 'row'}}>
              {data.map(item => (
                <View key={item.id}>
                  <Pressable>
                    <View
                      style={{
                        width: windowWidth * 0.8,
                        alignSelf: 'center',
                        margin: 5,
                      }}>
                      <Card lower={0} data={item} />

                      <Draggable
                        disabled={
                          !activeDraggable ? false : activeDraggable !== item.id
                        }
                        onDragRelease={() => {
                          if (!activeDraggable) {
                            setActiveDraggable(item.id);
                          }
                          setEnabled(true);
                        }}>
                        <Card lower={1} data={item} />
                      </Draggable>
                    </View>
                  </Pressable>
                </View>
              ))}
            </View>
          </ScrollView>
          <View
            style={{
              justifyContent: 'center',
              position: 'absolute',
              top: '60%',
              alignSelf: 'center',
              left: '8%',
            }}>
            <Pressable onPress={() => RNRestart.restart()}>
              <Drop mode={isDarkMode} choosedCard={activeDraggable} />
            </Pressable>
          </View>
          <View></View>
        </View>
        <View style={{flex: 1, alignSelf: 'center'}}>
          {enabled && (
            <Pressable onPress={() => setModalVisible(true)}>
              <View
                style={{
                  backgroundColor: '#007236',
                  margin: 20,
                  width: windowWidth * 0.8,
                  borderRadius: 12.5,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    alignSelf: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    padding: 12,
                  }}>
                  Pay Now
                </Text>
              </View>
            </Pressable>
          )}
          {!enabled && (
            <Pressable disabled>
              <View
                style={{
                  backgroundColor: '#737a7a',
                  margin: 20,
                  width: windowWidth * 0.8,
                  borderRadius: 12.5,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    alignSelf: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    padding: 12,
                  }}>
                  Pay Now
                </Text>
              </View>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

const allstyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#1C2437C4', // Semi-transparent gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardsText: {
    color: '#1C2437',
    fontFamily: 'roboto',
    fontWeight: '700',
    fontSize: 20,
    margin: 20,
  },
});

export default AirPayScreen;
