import { takeLatest, all, put, call } from 'redux-saga/effects';

import * as api from 'api';

import {
  fetchTemplates as fetchTemplatesAction,
  fetchTemplatesSuccess as fetchTemplatesSuccessAction,
  fetchTemplate as fetchTemplateAction,
  fetchTemplateSuccess as fetchTemplateSuccessAction,
  postTemplate as postTemplateAction,
  postTemplateSuccess as postTemplateSuccessAction,
} from './slice';

export function* fetchTemplates({ payload }) {
  try {
    const response = yield call(api.fetchTemplates, payload);
    yield put({
      type: fetchTemplatesSuccessAction.type,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* fetchTemplate({ payload }) {
  try {
    const response = yield call(api.fetchTemplate, payload);
    yield put({
      type: fetchTemplateSuccessAction.type,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export function* postTemplate({ payload }) {
  try {
    const response = yield call(api.postTemplate, payload);
    yield put({
      type: postTemplateSuccessAction.type,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}

export default function*() {
  yield all([takeLatest(fetchTemplatesAction.type, fetchTemplates)]);
  yield all([takeLatest(fetchTemplateAction.type, fetchTemplate)]);
  yield all([takeLatest(postTemplateAction.type, postTemplate)]);
}
