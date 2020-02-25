import * as types from 'constants/ActionTypes';

export const addQuestionAction = () => ({ type: types.ADD_QUESTION });
export const addInitialTwoAnswerAction = payload => ({
  type: types.ADD_INITIAL_TWO_ANSWER,
  payload,
});
export const addInitialNumberAnswer = payload => ({
  type: types.ADD_INITIAL_NUMBER_ANSWER,
  payload,
});
export const changeTypeQuestionAction = payload => ({
  type: types.CHANGE_TYPE_QUESTION,
  payload,
});
export const saveTestAction = item => ({ type: types.SAVE_TEST, item });
export const closeAddingQuestionAction = payload => ({
  type: types.CLOSE_ADDING_QUESTION,
  payload,
});
export const addTestNameAction = payload => ({
  type: types.ADD_TEST_NAME,
  payload,
});
export const addlistQuestionAction = payload => ({
  type: types.ADD_LIST_QUESTION,
  payload,
});
export const addQuestionIntermediateAction = payload => ({
  type: types.ADD_QUESTION_INTERMEDIATE,
  payload,
});
export const addTextQuestionAction = payload => ({
  type: types.ADD_TEXT_QUESTION,
  payload,
});
export const addTextAnswerAction = payload => ({
  type: types.ADD_TEXT_ANSWER,
  payload,
});
export const addAnswerAction = payload => ({ type: types.ADD_ANSWER, payload });
export const saveQuestionAction = item => ({ type: types.SAVE_QUESTION, item });
export const changeCheckAction = (id) => ({ type: types.CHANGE_CHECK, id });
export const changeRadioAction = (id) => ({ type: types.CHANGE_RADIO, id });
export const changeTextAnswerAction = (id, text) => ({
  type: types.CHANGE_TEXT_ANSWER_ACTION,
  id,
  text,
});
export const addTypeQuestionAction = (payload) => ({ type: types.ADD_TYPE_QUESTION, payload });
export const deleteQuestionAction = id => ({ type: types.DELETE_QUESTION, id });
export const editQuestionAction = item => ({ type: types.EDIT_QUESTION, item });
export const changeIdEditQuestionAction = id => ({ type: types.CHANGE_ID_EDIT_QUESTION, id });
export const setEditQuestionAction = payload => ({
  type: types.SET_EDIT_QUESTION,
  payload,
});
export const clearIntermediateValueQuestionAction = payload => ({
  type: types.CLEAR_INTERMEDIATE_VALUE_QUESTION,
  payload,
});
export const clearIntermediateValueTestAction = payload => ({
  type: types.CLEAR_INTERMEDIATE_VALUE_TEST,
  payload,
});
export const editTestAction = item => ({ type: types.EDIT_TEST, item });
export const changeIdEditTestAction = id => ({ type: types.CHANGE_ID_EDIT_TEST, id });
export const setEditTestAction = payload => ({
  type: types.SET_EDIT_TEST,
  payload,
});
export const showModalWindowAction = payload => ({ type: types.SHOW_MODAL_WINDOW, payload });
export const deleteTestAction = id => ({ type: types.DELETE_TEST, id });
