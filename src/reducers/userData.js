import {
  ADD_DATA_USER,
} from 'constants/ActionTypes';

const data = { userData: {} };

const initialState = localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).userData.length !== 0
  ? JSON.parse(localStorage.getItem('app-test')).userData
  : data;

export default function userData(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA_USER:
      return action.payload;
    default:
      return state;
  }
}
