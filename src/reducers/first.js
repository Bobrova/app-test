import {
  ADD_QUESTION,
  CHANGE_TYPE_QUESTION,
  ADD_ANSWER,
} from 'constants/ActionTypes';

const initialState = {
  addingQuestion: false,
  typeQuestion: '',
  counterAnswer: 0,
};

export default function first(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        addingQuestion: !state.addingQuestion,
      };
    case CHANGE_TYPE_QUESTION:
      return {
        ...state,
        typeQuestion: action.payload,
      };
    case ADD_ANSWER:
      return {
        ...state,
        counterAnswer: state.counterAnswer + 1,
      };
    default:
      return state;
  }
}
