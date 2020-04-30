/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    addingQuestion: false,
    typeQuestion: '',
    editIdQuestion: -1,
    isEditQuestion: false,
    editIdTest: -1,
    isEditTest: false,
    isModalWindow: false,
    isSortName: false,
    isSortDate: false,
    rightAnswer: [],
  },
  reducers: {
    addQuestion(state) {
      state.addingQuestion = true;
    },
    closeAddingQuestion(state) {
      state.addingQuestion = false;
    },
    changeIdEditQuestion(state, { payload }) {
      state.editIdQuestion = payload.id;
    },
    chsngeTypeQuestion(state, { payload }) {
      state.typeQuestion = payload;
    },
    setEditQuestion(state, { payload }) {
      state.isEditQuestion = payload;
    },
    changeIdEditTest(state, { payload }) {
      state.editIdTest = payload.id;
    },
    setEditTest(state, { payload }) {
      state.isEditTest = payload;
    },
    showModalWindow(state, { payload }) {
      state.isModalWindow = payload;
    },
    clearTypeQuestion(state) {
      state.typeQuestion = '';
    },
    setSortName(state, { payload }) {
      state.isSortName = payload;
    },
    setSortDate(state, { payload }) {
      state.isSortDate = payload;
    },
    changeFilterGallery(state, { payload }) {
      state.filterGallery = payload;
    },
    addRightAnswer(state, { payload }) {
      state.rightAnswer = payload;
    },
  },
});

export const { changeFilterGallery, addRightAnswer } = commonSlice.actions;

export default commonSlice.reducer;
