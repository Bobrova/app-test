import {
  ADD_TEST_NAME,
  SAVE_QUESTION,
  DELETE_QUESTION,
} from 'constants/ActionTypes';

const initialState = { nameTest: '', questionList: [] };

export default function first(state = initialState, action) {
  switch (action.type) {
    case ADD_TEST_NAME:
      return { ...state, nameTest: action.payload };
    case SAVE_QUESTION:
      return {
        ...state,
        questionList: state.questionList.filter(item => item.id === action.item.id).length !== 0
          ? state.questionList.map(item => item.id === action.item.id
            ? action.item
            : item)
          : [...state.questionList, action.item],
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questionList: state.questionList.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
}
