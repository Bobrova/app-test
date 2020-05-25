import { createSelector } from 'reselect';

const getIntermediateValueTest = (state) => state.intermediateValueTest;
const getQuestionList = (state) => state.intermediateValueTest.questionList;
const getAnswerList = (state) => state.intermediateValueQuestion.answerList;
const getTestList = (state) => state.listTest;
const getTakingTest = (state) => state.takingTest;
const getRightAnswersList = (state) => state.rightAnswersList;
const getUserData = (state) => state.userData;
const getIntermediateValueQuestion = (state) => state.intermediateValueQuestion;
const getEditTest = (state) => state.editTest;

export const getCurrentIdAnswerSelector = createSelector(
  [getAnswerList],
  (answerList) => {
    return answerList.length !== 0
      ? answerList.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id + 1
      : 1;
  },
);

export const getCurrentIdQuestionSelector = createSelector(
  [getQuestionList],
  (questionList) => {
    return questionList.length !== 0
      ? questionList.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id + 1
      : 1;
  },
);

export const getCurrentIdTestSelector = createSelector(
  [getTestList],
  (testList) => {
    return testList.length !== 0
      ? testList.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id + 1
      : 1;
  },
);

export const getDateCreateSelector = createSelector(
  [getIntermediateValueTest],
  (test) => {
    return test.dateCreate;
  },
);

export const getTakingTestSelector = createSelector(
  [getTakingTest],
  (test) => {
    return test;
  },
);

export const getRightAnswersListSelector = createSelector(
  [getRightAnswersList],
  (list) => {
    return list;
  },
);

export const getTestListSelector = createSelector(
  [getTestList],
  (list) => {
    return list;
  },
);

export const getIsAdminSelector = createSelector(
  [getUserData],
  (userData) => {
    return userData.isAdmin;
  },
);

export const getTextQuestionSelector = createSelector(
  [getIntermediateValueQuestion],
  (question) => {
    return question.textQuestion;
  },
);

export const getAnswerListSelector = createSelector(
  [getIntermediateValueQuestion],
  (question) => {
    return question.answerList;
  },
);

export const getTypeQuestionSelector = createSelector(
  [getIntermediateValueQuestion],
  (question) => {
    return question.typeQuestion;
  },
);

export const getQuestionListSelector = createSelector(
  [getIntermediateValueTest],
  (test) => {
    return test.questionList;
  },
);

export const getNameTestSelector = createSelector(
  [getIntermediateValueTest],
  (test) => {
    return test.nameTest;
  },
);

export const getIsEditTestSelector = createSelector(
  [getEditTest],
  (editTest) => {
    return editTest.isEditTest;
  },
);

export const getEditIdTestSelector = createSelector(
  [getEditTest],
  (editTest) => {
    return editTest.editIdTest;
  },
);
