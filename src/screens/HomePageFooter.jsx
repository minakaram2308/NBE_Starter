import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {HistoryScreen} from './HistoryScreen';

export const HomePageFooter = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.historyTextContainer}>
          <Text style={styles.historyText}>History</Text>
        </View>
        <View style={styles.viewAllTextContainer}>
          <Text style={styles.viewAllText}>View All</Text>
        </View>
      </View>
      <HistoryScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    margin: 10,
    marginEnd: 20,
    flexDirection: 'row',
  },
  historyTextContainer: {
    alignItems: 'flex-start',
    flex: 0.5,
  },
  historyText: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
  },
  viewAllTextContainer: {
    alignItems: 'flex-end',
    flex: 0.5,
  },
  viewAllText: {
    color: '#767575',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    writingDirection: 'rtl',
  },
});
