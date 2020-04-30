/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const takingTestSlice = createSlice({
  name: 'takingTest',
  initialState: localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).takingTest.length !== 0
    ? JSON.parse(localStorage.getItem('app-test')).takingTest
    : [],
  reducers: {
    changeTakingTest(state, { payload }) {
      state = payload;
    },
    changeCheckboxAnswer(state, { payload }) {
      state.questionList = state.questionList.map(item => item.id === payload.idQuestion
        ? {
          ...item,
          answerList: item.answerList.map(item => item.id === payload.idAnswer
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
        });
    },
    changeRadioAnswer(state, { payload }) {
      state.questionList = state.questionList.map(item => item.id === payload.idQuestion
        ? {
          ...item,
          answerList: item.answerList.map(item => item.id === payload.idAnswer
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
        });
    },
    changeTextAnswer(state, { payload }) {
      state.questionList = state.questionList.map(
        itemQuestion => itemQuestion.id === payload.idQuestion
          ? {
            ...itemQuestion,
            answerList: itemQuestion.answerList.map(
              itemAnswer => itemAnswer.id === payload.idAnswer
                ? {
                  ...itemAnswer,
                  textAnswer: payload.text,
                }
                : itemAnswer,
            ),
          }
          : {
            ...itemQuestion,
          },
      );
    },
  },
});

export const {
  changeTextAnswer,
  changeRadioAnswer,
  changeCheckboxAnswer,
  changeTakingTest,
} = takingTestSlice.actions;

export default takingTestSlice.reducer;
