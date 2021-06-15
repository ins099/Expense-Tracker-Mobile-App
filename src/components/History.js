import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

const History = () => {
  const {transactionReducers} = useSelector(state => ({
    transactionReducers: state.transactionReducers.transactions,
  }));

  console.log(transactionReducers);

  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 20,
            padding: 20,
            paddingBottom: 0,
          }}>
          History
        </Text>
        <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>
        <ScrollView style={styles.transBox}>
          {transactionReducers.length > 0 ? (
            transactionReducers.map(item => {
              return (
                <TouchableOpacity style={styles.transItem}>
                  <Text style={styles.itemText}>{item.detail}</Text>
                  <Text style={styles.itemText}>{item.amount}</Text>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text>No Transactions found</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  transBox: {
    padding: 10,
    height: heightPercentageToDP(20),
  },
  transItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRightColor: 'red',
    borderRightWidth: 2,
    backgroundColor: 'beige',
    marginBottom: 10,
    height: heightPercentageToDP(4),
    width: widthPercentageToDP(80),
  },
  itemText: {
    paddingTop: 5,
    paddingLeft: 6,
  },
});
