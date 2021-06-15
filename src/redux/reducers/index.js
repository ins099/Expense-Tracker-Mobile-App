import {combineReducers} from 'redux';
import transactionReducers from './transactionReducers';

const rootReducer = combineReducers({
  //pass in the reducers
  transactionReducers,
});

export default rootReducer;
