import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

const update = () => {
  localStorage.setItem('app-test', JSON.stringify(store.getState()));
};

store.subscribe(update);

sagaMiddleware.run(rootSaga);

export default store;
