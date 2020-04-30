/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const listTestSlice = createSlice({
  name: 'listTest',
  initialState: localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).listTest.length !== 0
    ? JSON.parse(localStorage.getItem('app-test')).listTest
    : [],
  reducers: {
    saveTest(state, { payload }) {
      state = state.filter(item => item.id === payload.item.id).length !== 0
        ? state.map(item => item.id === payload.item.id
          ? payload.item
          : item)
        : [...state, payload.item];
    },
    deleteTest(state, { payload }) {
      state.filter(item => item.id !== payload.id);
    },
  },
});

export const {
  deleteTest,
  saveTest,
} = listTestSlice.actions;

export default listTestSlice.reducer;
