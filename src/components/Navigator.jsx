import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './../styles/components/Navigator.style'

export const Navigator = ({ navigation }) => {

  return (
    <View style={styles.navigator}>

      <TouchableWithoutFeedback>
        <View style={styles.activeNavBtn}>
          <MaterialCommunityIcons
            name="home"
            style={styles.activeNavIcon}
            size={25}
          />
          <Text style={styles.activeNavText}>Home</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={styles.navBtn}>
          <MaterialCommunityIcons
            name="bank-transfer"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>Transfer</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={styles.navBtn}>
          <Icon
            name="people"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>Benef.</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={styles.navBtn}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>ATMs</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View style={styles.navBtn}>
          <MaterialCommunityIcons
            name="cellphone-nfc"
            style={styles.navIcon}
            size={25}
          />
          <Text style={styles.navText}>Air Pay</Text>
        </View>
      </TouchableWithoutFeedback>

    </View>
  )
}