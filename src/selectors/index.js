import { createSelector } from 'reselect';

const getIntermediateValueTest = (state) => state.intermediateValueTest;
const getQuestionList = (state) => state.intermediateValueTest.questionList;
const getAnswerList = (state) => state.intermediateValueQuestion.answerList;
const getTestList = (state) => state.listTest;

export const getCurrentIdAnswer = createSelector(
  [getAnswerList],
  (answerList) => {
    return answerList.length !== 0
      ? answerList.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id + 1
      : 1;
  },
);

export const getCurrentIdQuestion = createSelector(
  [getQuestionList],
  (questionList) => {
    return questionList.length !== 0
      ? questionList.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id + 1
      : 1;
  },
);

export const getCurrentIdTest = createSelector(
  [getTestList],
  (testList) => {
    return testList.length !== 0
      ? testList.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id + 1
      : 1;
  },
);

export const getDateCreate = createSelector(
  [getIntermediateValueTest],
  (test) => {
    return test.dateCreate;
  },
);
