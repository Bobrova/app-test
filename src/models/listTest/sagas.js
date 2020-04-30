import { takeLatest, all, put, call } from 'redux-saga/effects';

import * as api from 'api';

import {
  fetchMemes as fetchMemesAction,
  fetchMemesSuccess as fetchMemesSuccessAction,
  fetchMeme as fetchMemeAction,
  fetchMemeSuccess as fetchMemeSuccessAction,
  postShare as postShareAction,
  postShareSuccess as postShareSuccessAction,
  postMeme as postMemeAction,
  postMemeSuccess as postMemeSuccessAction,
  deleteMeme as deleteMemeAction,
  deleteMemeSuccess as deleteMemeSuccessAction,
} from './slice';

export function* fetchMemes({ payload }) {
  try {
    const response = yield call(api.fetchMemes, payload);
    yield put({
      type: fetchMemesSuccessAction.type,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* fetchMeme({ payload }) {
  try {
    const response = yield call(api.fetchMeme, payload);
    yield put({
      type: fetchMemeSuccessAction.type,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* postMeme({ payload }) {
  try {
    const response = yield call(api.postMeme, payload);
    yield put({
      type: postMemeSuccessAction.type,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* postShare({ payload }) {
  try {
    const response = yield call(api.postShare, payload);
    yield put({
      type: postShareSuccessAction.type,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* deleteMeme({ payload }) {
  try {
    const response = yield call(api.deleteMeme, payload);
    yield put({
      type: deleteMemeSuccessAction.type,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export default function*() {
  yield all([takeLatest(fetchMemesAction.type, fetchMemes)]);
  yield all([takeLatest(fetchMemeAction.type, fetchMeme)]);
  yield all([takeLatest(postShareAction.type, postShare)]);
  yield all([takeLatest(postMemeAction.type, postMeme)]);
  yield all([takeLatest(deleteMemeAction.type, deleteMeme)]);
}
