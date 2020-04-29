import {
  ADD_TEST_NAME,
  ADD_DATE_CREATE,
  SAVE_QUESTION,
  DELETE_QUESTION,
  CLEAR_INTERMEDIATE_VALUE_TEST,
  EDIT_TEST,
} from 'constants/ActionTypes';

const data = { nameTest: '', questionList: [] };

const initialState = localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).intermediateValueTest.length !== 0
  ? JSON.parse(localStorage.getItem('app-test')).intermediateValueTest
  : data;

export default function intermediateValueTest(state = initialState, action) {
  switch (action.type) {
    case ADD_TEST_NAME:
      return { ...state, nameTest: action.payload };
    case ADD_DATE_CREATE:
      return { ...state, dateCreate: action.payload };
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
    case CLEAR_INTERMEDIATE_VALUE_TEST:
      return { nameTest: '', questionList: [] };
    case EDIT_TEST:
      return action.item;
    default:
      return state;
  }
}
