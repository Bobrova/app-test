import {
  ADD_QUESTION,
  CHANGE_TYPE_QUESTION,
  CLOSE_ADDING_QUESTION,
  CHANGE_ID_EDIT_QUESTION,
  SET_EDIT_QUESTION,
} from 'constants/ActionTypes';

const initialState = {
  addingQuestion: false,
  typeQuestion: '',
  counterAnswer: 0,
  editIdQuestion: -1,
  isEditQuestion: false,
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
    case CHANGE_ID_EDIT_QUESTION:
      return {
        ...state,
        editIdQuestion: action.id,
      };
    case CHANGE_TYPE_QUESTION:
      return {
        ...state,
        typeQuestion: action.payload,
      };
    case SET_EDIT_QUESTION:
      return {
        ...state,
        isEditQuestion: action.payload,
      };
    default:
      return state;
  }
}
