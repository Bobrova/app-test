import {
  ADD_TEST_NAME,
} from 'constants/ActionTypes';

const initialState = {};

export default function first(state = initialState, action) {
  switch (action.type) {
    case ADD_TEST_NAME:
      return { ...state, testName: action.payload };
    default:
      return state;
  }
}
