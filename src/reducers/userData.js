import {
  ADD_DATA_USER,
} from 'constants/ActionTypes';

const initialState = {
  userData: {},
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case ADD_DATA_USER:
      return action.payload;
    default:
      return state;
  }
}
