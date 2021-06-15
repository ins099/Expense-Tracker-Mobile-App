import {INCOME, EXPENSE} from '../actionTypes';

const initialState = [];

const transactionReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCOME:
      return {
        ...state,
        detail: action.payload.detail,
        amount: action.payload.amount,
      };
    case EXPENSE:
    default:
      return state;
  }
};

export default transactionReducers;
