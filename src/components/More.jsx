import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './../styles/components/More.style'

export const More = ({ navigation }) => {

  const openAccountsScreen = () => {
    navigation.navigate('accounts')
  }

  const openCardsScreen = () => {
    navigation.navigate('cards')
  }

  const openUtilsScreen = () => {
    navigation.navigate('utils')
  }

  const openHistoryScreen = () => {
    navigation.navigate('history')
  }


  return (
    <View style={styles.more}>

      <TouchableWithoutFeedback onPress={openAccountsScreen}>
        <View style={styles.accountNavBtn}>
          <MaterialCommunityIcons
            name="account-box-multiple-outline"
            style={styles.accountNavIcon}
            size={25}
          />
          <Text style={styles.accountNavText}>Accounts</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={openCardsScreen}>
        <View style={styles.cardsNavBtn}>
          <MaterialCommunityIcons
            name="credit-card-outline"
            style={styles.cardsNavIcon}
            size={25}
          />
          <Text style={styles.cardsNavText}>Cards</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={openUtilsScreen}>
        <View style={styles.utilsNavBtn}>
          <MaterialCommunityIcons
            name="water-pump"
            style={styles.utilsNavIcon}
            size={25}
          />
          <Text style={styles.utilsNavText}>Utilities</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={openHistoryScreen}>
        <View style={styles.historyNavBtn}>
          <MaterialCommunityIcons
            name="file-document-outline"
            style={styles.historyNavIcon}
            size={25}
          />
          <Text style={styles.historyNavText}>History</Text>
        </View>
      </TouchableWithoutFeedback>


    </View>
  )
}