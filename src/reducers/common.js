import {
  ADD_QUESTION,
  CHANGE_TYPE_QUESTION,
  CLOSE_ADDING_QUESTION,
  CHANGE_ID_EDIT_QUESTION,
  SET_EDIT_QUESTION,
  CHANGE_ID_EDIT_TEST,
  SET_EDIT_TEST,
  SHOW_MODAL_WINDOW,
  CLEAR_TYPE_QUESTION,
  CHANGE_ACCESS_RIGHTS,
  ADD_DATA_USER,
} from 'constants/ActionTypes';

const initialState = {
  addingQuestion: false,
  typeQuestion: '',
  editIdQuestion: -1,
  isEditQuestion: false,
  editIdTest: -1,
  isEditTest: false,
  isModalWindow: false,
  isAdmin: false,
  userData: {},
};

export default function common(state = initialState, action) {
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
    case CHANGE_ID_EDIT_TEST:
      return {
        ...state,
        editIdTest: action.id,
      };
    case SET_EDIT_TEST:
      return {
        ...state,
        isEditTest: action.payload,
      };
    case SHOW_MODAL_WINDOW:
      return {
        ...state,
        isModalWindow: action.payload,
      };
    case CLEAR_TYPE_QUESTION:
      return {
        ...state,
        typeQuestion: '',
      };
    case CHANGE_ACCESS_RIGHTS:
      return {
        ...state,
        isAdmin: action.payload,
      };
    case ADD_DATA_USER:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
}
