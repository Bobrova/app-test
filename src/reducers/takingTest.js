import {
  CHANGE_TAKING_TEST,
} from 'constants/ActionTypes';

const initialState = {};

export default function first(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAKING_TEST:
      return action.item;
    default:
      return state;
  }
}
