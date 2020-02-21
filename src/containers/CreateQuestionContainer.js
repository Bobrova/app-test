import { connect } from 'react-redux';
import CreateQuestion from 'components/CreateQuestion';
import { getCurrentIdAnswer, getCurrentIdQuestion } from 'selectors';
import {
  addTextQuestionAction,
  addTextAnswerAction,
  addAnswerAction,
  changeCheckAction,
  changeRadioAction,
  closeAddingQuestionAction,
  changeTextAnswerAction,
  saveQuestionAction,
  setEditQuestion,
  clearIntermediateValueQuestion,
} from 'actions';

const mapStateToProps = state => ({
  typeQuestion: state.first.typeQuestion,
  listAnswer: state.intermediateValueQuestion.answerList,
  nextIdAnswer: getCurrentIdAnswer(state),
  nextIdQuestion: getCurrentIdQuestion(state),
  textQuestion: state.intermediateValueQuestion.textQuestion,
  answerList: state.intermediateValueQuestion.answerList,
  questionList: state.intermediateValueTest.questionList,
  isEditQuestion: state.first.isEditQuestion,
  editIdQuestion: state.first.editIdQuestion,
});


export default connect(
  mapStateToProps,
  {
    addTextQuestionAction,
    addTextAnswerAction,
    addAnswerAction,
    changeCheckAction,
    changeRadioAction,
    closeAddingQuestionAction,
    changeTextAnswerAction,
    saveQuestionAction,
    setEditQuestion,
    clearIntermediateValueQuestion,
  },
)(CreateQuestion);
