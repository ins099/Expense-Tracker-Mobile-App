import {INCOME, EXPENSE} from '../actionTypes';

export const addIncome = payload => {
  return {
    type: INCOME,
    payload: {
      detail: payload.detail,
      amount: payload.amount,
    },
  };
};
export const addExpense = payload => {
  return {
    type: INCOME,
    detail: payload.detail,
    amount: payload.amount,
  };
};
