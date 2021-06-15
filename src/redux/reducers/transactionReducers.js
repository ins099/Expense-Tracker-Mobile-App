import {INCOME, EXPENSE} from '../actionTypes';

const initialState = {
  detail: '',
  amount: null,
};

const transactionReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCOME:
      console.log(action.payload);
    case EXPENSE:
    default:
      return state;
  }
};

export default transactionReducers;
