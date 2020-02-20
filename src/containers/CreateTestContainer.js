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
  editQuestionAction,
  changeIdEditQuestion,
  setEditQuestion,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.first.addingQuestion,
  typeQuestion: state.first.typeQuestion,
  listAnswer: state.intermediateValueQuestion.answerList,
  nextIdAnswer: getCurrentIdAnswer(state),
  nextIdQuestion: getCurrentIdQuestion(state),
  textQuestion: state.intermediateValueQuestion.textQuestion,
  answerList: state.intermediateValueQuestion.answerList,
  questionList: state.intermediateValueTest.questionList,
  editIdQuestion: state.first.editIdQuestion,
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
    editQuestionAction,
    changeIdEditQuestion,
    setEditQuestion,
  },
)(CreateTest);
