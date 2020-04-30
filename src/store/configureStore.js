import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import reducer from 'reducers';
// import { rootReducer } from 'models';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = configureStore({
//   reducer: rootReducer,
// });

const update = () => {
  localStorage.setItem('app-test', JSON.stringify(store.getState()));
};

store.subscribe(update);

export default store;
