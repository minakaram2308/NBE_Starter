import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
const Card = props => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{margin: 8}}>
      <ImageBackground
        source={
          props.data.type === 'green'
            ? require(`../../../assets/media/airPay/creditcard.png`)
            : require(`../../../assets/media/airPay/creditcard2.png`)
        }
        imageStyle={
          props.lower ? allstyles.imageBack : allstyles.imageBackLoweOpacity
        }>
        <View
          style={{
            width: windowWidth * 0.8,
            height: windowWidth * 0.8 * 0.6,
            alignSelf: 'center',
          }}>
          <View style={allstyles.sec1}>
            <Text style={allstyles.balanceText}>${props.data.balance}</Text>
            <Image
              style={{
                marginTop: 5,
                top: '20%',
                right: '8%',
                position: 'absolute',
              }}
              source={require('../../../assets/media/airPay/visa.png')}></Image>
          </View>
          <View style={allstyles.sec2}>
            <Text style={allstyles.cardNumberText}>
              **** **** **** {props.data.cardNumber}
            </Text>
            <Image
              style={{marginEnd: 4, marginTop: 4}}
              source={require('../../../assets/media/airPay/sim.png')}></Image>
            <Image
              style={{marginTop: 5}}
              source={require('../../../assets/media/airPay/wifi.png')}></Image>
          </View>
          <View style={allstyles.container}>
            <View style={allstyles.labelRow}>
              <View style={allstyles.labelNameItem}>
                <Text style={allstyles.labelText}>CARD HOLDER</Text>
              </View>
              <View style={allstyles.labelItem}>
                <Text style={allstyles.labelText}>EXPIRES</Text>
              </View>
              <View style={allstyles.labelItem}>
                <Text style={allstyles.labelText}>CVV</Text>
              </View>
            </View>
            <View style={allstyles.dataRow}>
              <View style={allstyles.dataNameItem}>
                <Text style={allstyles.dataText}>{props.data.name}</Text>
              </View>
              <View style={allstyles.dataItem}>
                <Text style={allstyles.dataText}>{props.data.expires}</Text>
              </View>
              <View style={allstyles.dataItem}>
                <Text style={allstyles.dataText}>{props.data.cvv}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const allstyles = StyleSheet.create({
  imageBack: {
    borderRadius: 20,
  },
  imageBackLoweOpacity: {
    borderRadius: 20,
    opacity: 0.3,
  },
  cardsText: {
    color: '#1C2437',
    fontFamily: 'roboto',
    fontWeight: '700',
    fontSize: 20,
    margin: 20,
  },
  cardsImages: {
    margin: 5,
  },
  cardElements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sec1: {
    flexDirection: 'row',
  },
  balanceText: {
    color: '#FFFFFF',
    fontSize: 25,
    margin: 20,
    fontWeight: '700',
    marginStart: 25,
  },
  sec2: {
    marginVertical: 12,
    flexDirection: 'row',
  },
  cardNumberText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '400',
    marginHorizontal: 25,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginStart: 25,
  },
  labelItem: {
    flex: 1,
    alignItems: 'flex-start',
  },
  labelNameItem: {
    flex: 2,
    alignItems: 'flex-start',
  },
  labelText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#848484',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 25,
  },
  dataItem: {
    flex: 1,
    alignItems: 'flex-start',
  },
  dataNameItem: {
    flex: 2,
    alignItems: 'flex-start',
  },
  dataText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default Card;
