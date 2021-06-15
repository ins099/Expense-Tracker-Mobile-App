import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/balance';
import CostBox from '../../components/costBox';
import History from '../../components/History';
import AddTransaction from '../../components/AddTransaction';
const Home = () => {
  return (
    <View>
      <Header />
      <Balance />
      <CostBox />
      <History />
      <AddTransaction />
    </View>
  );
};

export default Home;
