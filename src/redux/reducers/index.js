import {combineReducers} from 'redux';
import transactionReducers from './transactionReducers';
import expenseTransactionReducers from './expenseTransactionsReducers';

const rootReducer = combineReducers({
  //pass in the reducers
  transactionReducers,
  expenseTransactionReducers,
});

export default rootReducer;
