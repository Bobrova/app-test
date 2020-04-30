/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const data = { answerList: [], textQuestion: '', typeQuestion: '' };

const intermediateValueQuestionSlice = createSlice({
  name: 'intermediateValueQuestion',
  initialState: localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).intermediateValueQuestion.length !== 0
    ? JSON.parse(localStorage.getItem('app-test')).intermediateValueQuestion
    : data,
  reducers: {
    addInitialTwoAnswer(state) {
      state.answerList = [{ id: 0, textAnswer: '', check: true }, { id: 1, textAnswer: '', check: false }];
      state.textQuestion = '';
    },
    addInitialNumberAnswer(state) {
      state.answerList = [{ id: 0, textAnswer: '' }];
      state.textQuestion = '';
    },
    addTextQuestion(state, { payload }) {
      state.textQuestion = payload;
    },
    addTextAnswer(state, { payload }) {
      state.textAnswer = [...state.textAnswer, payload];
    },
    addAnswer(state, { payload }) {
      state.answerList = [...state.answerList, { id: payload, textAnswer: '', check: false }];
    },
    editQuestion(state, { payload }) {
      state = payload;
    },
    changeCheck(state, { payload }) {
      state.answerList = state.answerList.map(item => item.id === payload.id
        ? {
          ...item,
          check: !item.check,
        }
        : item);
    },
    changeRadio(state, { payload }) {
      state.answerList = state.answerList.map(item => item.id === payload.id
        ? {
          ...item,
          check: true,
        }
        : {
          ...item,
          check: false,
        });
    },
    changeTextAnswerCreate(state, { payload }) {
      state.answerList = state.answerList.map(item => item.id === payload.id
        ? {
          ...item,
          textAnswer: payload.text,
        }
        : item);
    },
    addTypeQuestion(state, { payload }) {
      state.typeQuestion = payload;
    },
    clearIntermediateValueQuestion(state) {
      state.answerList = [];
      state.textQuestion = '';
      state.typeQuestion = '';
    },
  },
});

export const {
  changeFilterGallery,
  clearIntermediateValueQuestion,
  addTypeQuestion,
  changeTextAnswerCreate,
  changeRadio,
  changeCheck,
  editQuestion,
  addAnswer,
  addTextAnswer,
  addTextQuestion,
  addInitialNumberAnswer,
  addInitialTwoAnswer,
} = intermediateValueQuestionSlice.actions;

export default intermediateValueQuestionSlice.reducer;
