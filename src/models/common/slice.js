/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    addingQuestion: false,
    typeQuestion: '',
    editIdTest: -1,
    isEditTest: false,
    isModalWindow: false,
    rightAnswer: [],
  },
  reducers: {
    addQuestion(state) {
      state.addingQuestion = true;
    },
    closeAddingQuestion(state) {
      state.addingQuestion = false;
    },
    chsngeTypeQuestion(state, { payload }) {
      state.typeQuestion = payload;
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
