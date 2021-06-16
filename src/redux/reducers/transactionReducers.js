import {ADDINCOME} from '../actionTypes';

const initialState = {transactions: []};

const transactionReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADDINCOME:
      let id = state.transactions.length + 1;
      return {
        transactions: [
          ...state.transactions,
          {
            id,
            detail: payload.detail,
            amount: payload.amount,
          },
        ],
      };
    default:
      return state;
  }
};

export default transactionReducers;
