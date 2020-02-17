import {
  ADD_TEXT_QUESTION,
  ADD_TEXT_ANSWER,
} from 'constants/ActionTypes';

const initialState = {};

export default function first(state = initialState, action) {
  switch (action.type) {
    case ADD_TEXT_QUESTION:
      return { ...state, textQuestion: action.payload };
    case ADD_TEXT_ANSWER:
      return { ...state, textAnswer: [...state.textAnswer, action.payload] };
    default:
      return state;
  }
}
