import {
  SAVE_TEST,
} from 'constants/ActionTypes';

const data = [];

const initialState = localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).listTest.length !== 0
  ? JSON.parse(localStorage.getItem('app-test')).listTest
  : data;

export default function first(state = initialState, action) {
  switch (action.type) {
    case SAVE_TEST:
      return [...state, action.payload];
    default:
      return state;
  }
}
