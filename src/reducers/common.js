import {
  SET_EDIT_QUESTION,
  CHANGE_ID_EDIT_TEST,
  SET_EDIT_TEST,
  SHOW_MODAL_WINDOW,
  SET_SORT_NAME,
  SET_SORT_DATE,
} from 'constants/ActionTypes';

const initialState = {
  isEditQuestion: false,
  editIdTest: -1,
  isEditTest: false,
  isModalWindow: false,
  isSortName: false,
  isSortDate: false,
};

export default function common(state = initialState, action) {
  switch (action.type) {
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
    case SET_SORT_NAME:
      return {
        ...state,
        isSortName: action.payload,
      };
    case SET_SORT_DATE:
      return {
        ...state,
        isSortDate: action.payload,
      };
    default:
      return state;
  }
}
