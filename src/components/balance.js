import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Balance = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bal}>Your Balance</Text>
      <Text style={styles.amnt}>0.00 Rs</Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    backgroundColor: 'beige',
  },
  bal: {
    fontSize: 16,
  },
  amnt: {
    fontSize: 40,
  },
});
