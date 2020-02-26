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
  setEditQuestionAction,
  clearIntermediateValueQuestionAction,
} from 'actions';

const mapStateToProps = state => ({
  typeQuestion: state.intermediateValueQuestion.typeQuestion === '' ? state.common.typeQuestion : state.intermediateValueQuestion.typeQuestion,
  listAnswer: state.intermediateValueQuestion.answerList,
  nextIdAnswer: getCurrentIdAnswer(state),
  nextIdQuestion: getCurrentIdQuestion(state),
  textQuestion: state.intermediateValueQuestion.textQuestion,
  answerList: state.intermediateValueQuestion.answerList,
  questionList: state.intermediateValueTest.questionList,
  isEditQuestion: state.common.isEditQuestion,
  editIdQuestion: state.common.editIdQuestion,
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
    setEditQuestionAction,
    clearIntermediateValueQuestionAction,
  },
)(CreateQuestion);
