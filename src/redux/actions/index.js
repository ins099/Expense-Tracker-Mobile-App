import {ADDEXPENSE, ADDINCOME} from '../actionTypes';

export const addIncome = payload => {
  return {
    type: ADDINCOME,
    payload,
  };
};
export const addExpense = payload => {
  return {
    type: ADDEXPENSE,
    payload,
  };
};
