import {INCOME, EXPENSE} from '../actionTypes';

const initialState = {transactions: []};

const transactionReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCOME:
      let id = state.transactions.length + 1;
      return {
        transactions: [
          ...state.transactions,
          {
            id: id,
            detail: action.payload.detail,
            amount: action.payload.amount,
          },
        ],
      };
    case EXPENSE:
    default:
      return state;
  }
};

export default transactionReducers;
