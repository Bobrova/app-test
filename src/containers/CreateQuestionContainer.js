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
  changeTextAnswerCreateAction,
  saveQuestionAction,
  setEditQuestionAction,
  clearIntermediateValueQuestionAction,
  validationTextQuestionAction,
  validationQuestionAnswersAction,
} from 'actions';

const mapStateToProps = state => ({
  typeQuestion: state.intermediateValueQuestion.typeQuestion === '' ? state.common.typeQuestion : state.intermediateValueQuestion.typeQuestion,
  nextIdAnswer: getCurrentIdAnswer(state),
  nextIdQuestion: getCurrentIdQuestion(state),
  textQuestion: state.intermediateValueQuestion.textQuestion,
  answerList: state.intermediateValueQuestion.answerList,
  questionList: state.intermediateValueTest.questionList,
  isEditQuestion: state.common.isEditQuestion,
  editIdQuestion: state.common.editIdQuestion,
  isTextQuestion: state.validation.isTextQuestion,
  isAnswer: state.validation.isAnswer,
  listBlankFields: state.validation.listBlankFields,
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
    changeTextAnswerCreateAction,
    saveQuestionAction,
    setEditQuestionAction,
    clearIntermediateValueQuestionAction,
    validationTextQuestionAction,
    validationQuestionAnswersAction,
  },
)(CreateQuestion);
