import {
  ADD_QUESTION,
  CHANGE_TYPE_QUESTION,
} from 'constants/ActionTypes';

const data = {
  addingQuestion: false,
  typeQuestion: '',
};

const initialState = localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).first.length !== 0
  ? JSON.parse(localStorage.getItem('app-test')).first
  : data;

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
    default:
      return state;
  }
}
