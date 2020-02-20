import { connect } from 'react-redux';
import CreateTest from 'components/CreateTest';
import { getCurrentIdAnswer, getCurrentIdQuestion } from 'selectors';
import {
  addQuestionAction,
  changeTypeQuestionAction,
  addTestAction,
  addTestNameAction,
  addTextQuestionAction,
  addTextAnswerAction,
  addAnswerAction,
  addInitialTwoAnswerAction,
  addInitialNumberAnswer,
  changeCheckAction,
  changeRadioAction,
  closeAddingQuestionAction,
  changeTextAnswerAction,
  saveQuestionAction,
  deleteQuestionAction,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.first.addingQuestion,
  typeQuestion: state.first.typeQuestion,
  listAnswer: state.intermediateValueQuestion.answerList,
  answerId: getCurrentIdAnswer(state),
  questionId: getCurrentIdQuestion(state),
  textQuestion: state.intermediateValueQuestion.textQuestion,
  answerList: state.intermediateValueQuestion.answerList,
  questionList: state.intermediateValueTest.questionList,
});


export default connect(
  mapStateToProps,
  {
    addQuestionAction,
    changeTypeQuestionAction,
    addTestAction,
    addTestNameAction,
    addTextQuestionAction,
    addTextAnswerAction,
    addAnswerAction,
    addInitialTwoAnswerAction,
    addInitialNumberAnswer,
    changeCheckAction,
    changeRadioAction,
    closeAddingQuestionAction,
    changeTextAnswerAction,
    saveQuestionAction,
    deleteQuestionAction,
  },
)(CreateTest);
