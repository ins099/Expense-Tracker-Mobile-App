import React, {useState} from 'react';
import {
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
import {addExpense, addIncome} from '../redux/actions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const AddTransaction = () => {
  const [detail, setDetail] = useState('');
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{fontSize: 20, padding: 20, paddingBottom: 0}}>
        Add Transaction
      </Text>
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1}}></View>

      <View>
        <KeyboardAwareScrollView>
          <TextInput
            placeholder="Transaction Detail"
            onChangeText={detail => setDetail(detail)}
            value={detail}></TextInput>
          <TextInput
            placeholder="Amount"
            onChangeText={amount => setAmount(amount)}
            value={amount}></TextInput>
        </KeyboardAwareScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setDetail('');
              setAmount(0);
              dispatch(addIncome({detail: detail, amount: amount}));
            }}>
            <Text style={styles.btnTxt}>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.expBtn}
            onPress={() => {
              setDetail('');
              setAmount(0);
              dispatch(addExpense({detail: detail, amount: amount}));
            }}>
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
