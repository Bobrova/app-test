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
      return state.filter(item => item.id === action.item.id).length !== 0
        ? state.map(item => item.id === action.item.id
          ? action.item
          : item)
        : [...state, action.item];
    default:
      return state;
  }
}
