import {
  ADD_TEXT_RESULT_MODAL,
  CHANGE_TYPE_MODAL_WINDOW,
} from 'constants/ActionTypes';

const initialState = {
  number: 0,
  typeModalWindow: '',
};

export default function rightAnswersList(state = initialState, action) {
  switch (action.type) {
    case ADD_TEXT_RESULT_MODAL:
      return {
        ...state,
        number: action.payload,
      };
    case CHANGE_TYPE_MODAL_WINDOW:
      return {
        ...state,
        typeModalWindow: action.payload,
      };
    default:
      return state;
  }
}
