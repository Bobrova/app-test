/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const data = {
  login: '',
  isAdmin: false,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState: localStorage.getItem('app-test')
  && JSON.parse(localStorage.getItem('app-test')).userData.length !== 0
    ? JSON.parse(localStorage.getItem('app-test')).userData
    : data,
  reducers: {
    changeAccessRights(state, { payload }) {
      state.isAdmin = payload;
    },
    addDataUser(state, { payload }) {
      state.login = payload.login;
    },
  },
});


export const {
  addDataUser,
  changeAccessRights,
} = userDataSlice.actions;

export default userDataSlice.reducer;
