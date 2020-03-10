import {
  ADD_DATA_USER,
  CHANGE_ACCESS_RIGHTS,
} from 'constants/ActionTypes';

const data = {
  login: '',
  isAdmin: false,
};

const initialState = localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).userData.length !== 0
  ? JSON.parse(localStorage.getItem('app-test')).userData
  : data;

export default function userData(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA_USER:
      return {
        ...state,
        login: action.payload.login,
      };
    case CHANGE_ACCESS_RIGHTS:
      return {
        ...state,
        isAdmin: action.payload,
      };
    default:
      return state;
  }
}
