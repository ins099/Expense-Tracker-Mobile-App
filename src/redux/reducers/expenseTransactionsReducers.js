import {ADDEXPENSE} from '../actionTypes';

const initialState = {transactions: []};

const expenseTransactionReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADDEXPENSE:
      return {
        transactions: [
          ...state.transactions,
          {
            detail: payload.detail,
            amount: payload.amount,
          },
        ],
      };
    default:
      return state;
  }
};

export default expenseTransactionReducers;
