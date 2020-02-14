import {
  ADD_QUESTION,
} from 'constants/ActionTypes';

const initialState = localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).first.length !== 0
  ? JSON.parse(localStorage.getItem('app-test')).first
  : { addingQuestion: false };

export default function first(state = initialState, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        addingQuestion: !state.addingQuestion,
      };
    default:
      return state;
  }
}
