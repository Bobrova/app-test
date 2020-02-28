import {
  CHANGE_TAKING_TEST,
  CHANGE_CHECKBOX_ANSWER,
  CHANGE_RADIO_ANSWER,
} from 'constants/ActionTypes';

const data = [];

const initialState = localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).takingTest.length !== 0
  ? JSON.parse(localStorage.getItem('app-test')).takingTest
  : data;

export default function takingTest(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAKING_TEST:
      return action.item;
    case CHANGE_CHECKBOX_ANSWER:
      return {
        ...state,
        questionList:
            state.questionList.map(item => item.id === action.id.idQuestion
              ? {
                ...item,
                answerList: item.answerList.map(item => item.id === action.id.idAnswer
                  ? {
                    ...item,
                    check: !item.check,
                  }
                  : {
                    ...item,
                  }),
              }
              : {
                ...item,
              }),
      };
    case CHANGE_RADIO_ANSWER:
      return {
        ...state,
        questionList:
            state.questionList.map(item => item.id === action.id.idQuestion
              ? {
                ...item,
                answerList: item.answerList.map(item => item.id === action.id.idAnswer
                  ? {
                    ...item,
                    check: true,
                  }
                  : {
                    ...item,
                    check: false,
                  }),
              }
              : {
                ...item,
              }),
      };
    default:
      return state;
  }
}
