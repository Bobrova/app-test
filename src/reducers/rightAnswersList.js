import {
  ADD_RIGHT_ANSWER,
} from 'constants/ActionTypes';

const initialState = [];

export default function rightAnswersList(state = initialState, action) {
  switch (action.type) {
    case ADD_RIGHT_ANSWER:
      return action.payload;
    default:
      return state;
  }
}
