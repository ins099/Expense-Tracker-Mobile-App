import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// rnfes
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Expense Tracker</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    height: hp(10),
  },
  headText: {
    textAlign: 'center',
    paddingTop: 15,
    fontSize: 30,
  },
});
