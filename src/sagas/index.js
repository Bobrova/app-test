import {
  call,
  all,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  GET_LIST_REQUEST,
  POST_TEST_REQUEST,
  DELETE_TEST_REQUEST,
  PUT_TEST_REQUEST,
} from 'constants/ActionTypes';
import {
  getListSuccessAction,
  postTestSuccessAction,
  deleteTestSuccessAction,
  putTestSuccessAction,
  failureAction,
} from 'actions';
import api from 'api';

function* getList() {
  try {
    const list = yield call(api.getList);
    yield put(getListSuccessAction(list));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchGetList() {
  yield takeLatest(GET_LIST_REQUEST, getList);
}

function* postTest({ payload }) {
  try {
    const response = yield call(api.postTest, payload);
    yield put(postTestSuccessAction(response.data));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchPostTest() {
  yield takeLatest(POST_TEST_REQUEST, postTest);
}

function* deleteTest({ payload }) {
  try {
    yield call(api.deleteTest, payload);
    yield put(deleteTestSuccessAction(payload));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchDeleteTest() {
  yield takeLatest(DELETE_TEST_REQUEST, deleteTest);
}

function* putTest({ payload }) {
  try {
    yield call(api.putTest, payload);
    yield put(putTestSuccessAction(payload));
  } catch (e) {
    yield put(failureAction(e.message));
  }
}

function* watchChangeTest() {
  yield takeLatest(PUT_TEST_REQUEST, putTest);
}

export default function* rootSaga() {
  yield all([
    watchGetList(),
    watchPostTest(),
    watchDeleteTest(),
    watchChangeTest(),
  ]);
}
