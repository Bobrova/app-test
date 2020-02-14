import { createStore } from 'redux';
import reducer from 'reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

const update = () => {
  localStorage.setItem('app-test', JSON.stringify(store.getState()));
};

store.subscribe(update);

export default store;
