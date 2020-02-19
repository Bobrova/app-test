import {
  ADD_QUESTION,
  CHANGE_TYPE_QUESTION,
  CLOSE_ADDING_QUESTION,
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
        addingQuestion: true,
      };
    case CLOSE_ADDING_QUESTION:
      return {
        ...state,
        addingQuestion: false,
      };
    case CHANGE_TYPE_QUESTION:
      return {
        ...state,
        typeQuestion: action.payload,
      };
    default:
      return state;
  }
}
