/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const data = { nameTest: '', questionList: [] };

const intermediateValueTestSlice = createSlice({
  name: 'intermediateValueTest',
  initialState: localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).intermediateValueTest.length !== 0
    ? JSON.parse(localStorage.getItem('app-test')).intermediateValueTest
    : data,
  reducers: {
    addTestName(state, { payload }) {
      state.nameTest = payload;
    },
    addDateCreate(state, { payload }) {
      state.dateCreate = payload;
    },
    saveQuestion(state, { payload }) {
      state.questionList = state.questionList.filter(
        item => item.id === payload.item.id,
      ).length !== 0
        ? state.questionList.map(item => item.id === payload.item.id
          ? payload.item
          : item)
        : [...state.questionList, payload.item];
    },
    deleteQuestion(state, { payload }) {
      state.questionList = state.questionList.filter(item => item.id !== payload.id);
    },
    clearIntermediateValueTest(state) {
      state.nameTest = '';
      state.questionList = [];
    },
    editTest(state, { payload }) {
      state = payload;
    },
  },
});

export const {
  changeFilterGallery,
  editTest,
  clearIntermediateValueTest,
  deleteQuestion,
  saveQuestion,
  addDateCreate,
  addTestName,
} = intermediateValueTestSlice.actions;

export default intermediateValueTestSlice.reducer;
