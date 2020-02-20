import { createSelector } from 'reselect';

const getQuestionList = (state) => state.intermediateValueTest.questionList;
const getAnswerList = (state) => state.intermediateValueQuestion.answerList;

export const getCurrentIdAnswer = createSelector(
  [getAnswerList],
  (answerList) => {
    return answerList.length !== 0
      ? answerList.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id
      : 0;
  },
);

export const getCurrentIdQuestion = createSelector(
  [getQuestionList],
  (questionList) => {
    const k = questionList.length !== 0
      ? questionList.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id
      : 0;
    return k;
  },
);
