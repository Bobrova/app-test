import * as types from 'constants/ActionTypes';

export const addQuestionAction = () => ({ type: types.ADD_QUESTION });
export const changeTypeQuestionAction = payload => ({ type: types.CHANGE_TYPE_QUESTION, payload });
export const addTestAction = payload => ({ type: types.ADD_TEST, payload });
export const closeAddingQuestionAction = payload => ({
  type: types.CLOSE_ADDING_QUESTION,
  payload,
});
export const addTestNameAction = payload => ({ type: types.ADD_TEST_NAME, payload });
export const addlistQuestionAction = payload => ({ type: types.ADD_LIST_QUESTION, payload });
export const addQuestionIntermediateAction = payload => ({
  type: types.ADD_QUESTION_INTERMEDIATE,
  payload,
});
export const addTextQuestionAction = payload => ({ type: types.ADD_TEXT_QUESTION, payload });
export const addTextAnswerAction = payload => ({ type: types.ADD_TEXT_ANSWER, payload });
