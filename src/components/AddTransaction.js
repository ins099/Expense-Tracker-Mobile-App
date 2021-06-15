import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {addIncome} from '../redux/actions';
import {INCOME} from '../redux/actionTypes';

const AddTransaction = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{fontSize: 20, padding: 20, paddingBottom: 0}}>
        Add Transaction
      </Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>

      <View>
        <TextInput placeholder="Transaction Detail" type="text"></TextInput>
        <TextInput placeholder="Amount" type="number"></TextInput>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={dispatch({
              type: INCOME,
              payload: {detail: 'helooo', amount: 100},
            })}>
            <Text style={styles.btnTxt}>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.expBtn}>
            <Text style={styles.btnTxt}>Expense</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddTransaction;

const styles = StyleSheet.create({
  btn: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(20),
    backgroundColor: 'green',
    borderRadius: 25,
  },
  expBtn: {
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(20),
    backgroundColor: 'red',
    borderRadius: 25,
  },

  btnTxt: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 8,
  },
});
