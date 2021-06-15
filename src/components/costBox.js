import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const CostBox = () => {
  const totalIncome = useSelector(state => {
    const {transactions} = state.transactionReducers;
    let totalIncome = 0;
    transactions.map(item => {
      totalIncome += parseInt(item.amount);
    });
    return totalIncome;
  });

  return (
    <View style={{paddingTop: 20, paddingLeft: 30}}>
      <View style={styles.container}>
        <View style={styles.box}>
          <View>
            <Text style={styles.incText}>INCOME</Text>
            <Text style={styles.num}>{totalIncome} Rs</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View>
            <Text style={styles.expText}>Expense</Text>
            <Text style={styles.num}>0 Rs</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CostBox;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: wp(80),
  },
  box: {
    height: hp(10),
    width: wp(25),
    padding: 5,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
  },
  expText: {
    fontSize: 17,
    color: 'red',
  },
  incText: {
    fontSize: 17,
    color: 'green',
  },
  num: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 20,
  },
});
