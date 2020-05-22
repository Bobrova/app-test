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
export const addTestNameAction = payload => ({
  type: types.ADD_TEST_NAME,
  payload,
});
export const addTypeQuestionAction = (payload) => ({ type: types.ADD_TYPE_QUESTION, payload });
export const changeCheckAction = (id) => ({ type: types.CHANGE_CHECK, id });
export const changeRadioAction = (id) => ({ type: types.CHANGE_RADIO, id });
export const changeTextAnswerCreateAction = (id, text) => ({
  type: types.CHANGE_TEXT_ANSWER_CREATE,
  id,
  text,
});
export const changeTextAnswerAction = payload => ({
  type: types.CHANGE_TEXT_ANSWER,
  payload,
});
export const changeRadioAnswerAction = payload => ({ type: types.CHANGE_RADIO_ANSWER, payload });
export const changeCheckboxAnswerAction = payload => ({
  type: types.CHANGE_CHECKBOX_ANSWER,
  payload,
});
export const changeIdEditTestAction = id => ({ type: types.CHANGE_ID_EDIT_TEST, id });
export const changeTakingTest = item => ({ type: types.CHANGE_TAKING_TEST, item });
export const saveTestAction = item => ({ type: types.SAVE_TEST, item });
export const saveQuestionAction = item => ({ type: types.SAVE_QUESTION, item });
export const deleteQuestionAction = id => ({ type: types.DELETE_QUESTION, id });
export const editQuestionAction = item => ({ type: types.EDIT_QUESTION, item });
export const clearIntermediateValueQuestionAction = payload => ({
  type: types.CLEAR_INTERMEDIATE_VALUE_QUESTION,
  payload,
});
export const clearIntermediateValueTestAction = payload => ({
  type: types.CLEAR_INTERMEDIATE_VALUE_TEST,
  payload,
});
export const editTestAction = item => ({ type: types.EDIT_TEST, item });
export const setEditTestAction = payload => ({
  type: types.SET_EDIT_TEST,
  payload,
});
export const deleteTestAction = id => ({ type: types.DELETE_TEST, id });
export const changeAccessRights = payload => ({ type: types.CHANGE_ACCESS_RIGHTS, payload });
export const addDataUser = payload => ({ type: types.ADD_DATA_USER, payload });
export const addRightAnswer = payload => ({ type: types.ADD_RIGHT_ANSWER, payload });
export const addResultModalAction = payload => ({ type: types.ADD_TEXT_RESULT_MODAL, payload });
export const validationBlankFieldsAction = payload => ({
  type: types.VALIDATION_BLANK_FIELD,
  payload,
});
export const validationTextQuestionAction = payload => ({
  type: types.VALIDATION_TEXT_QUESTION,
  payload,
});
export const validationQuestionAnswersAction = payload => ({
  type: types.VALIDATION_QUESTION_ANSWERS,
  payload,
});
export const addDateCreate = payload => ({
  type: types.ADD_DATE_CREATE,
  payload,
});
