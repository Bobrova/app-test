import { connect } from 'react-redux';
import CreateQuestion from 'components/CreateQuestion';
import { getCurrentIdAnswer, getCurrentIdQuestion } from 'selectors';
import {
  addTextQuestionAction,
  addTextAnswerAction,
  addAnswerAction,
  changeCheckAction,
  changeRadioAction,
  changeTextAnswerCreateAction,
  saveQuestionAction,
  clearIntermediateValueQuestionAction,
  updateAnswerListAction,
} from 'actions';

const mapStateToProps = (state, props) => ({
  typeQuestion: state.intermediateValueQuestion.typeQuestion === '' ? props.typeQuestion : state.intermediateValueQuestion.typeQuestion,
  nextIdAnswer: getCurrentIdAnswer(state),
  nextIdQuestion: getCurrentIdQuestion(state),
  textQuestion: state.intermediateValueQuestion.textQuestion,
  answerList: state.intermediateValueQuestion.answerList,
  questionList: state.intermediateValueTest.questionList,
  setCreatingQuestion: props.setCreatingQuestion,
  setidEditQuestion: props.setidEditQuestion,
  idQuestionEdit: props.idQuestionEdit,
  prop: props,
});


export default connect(
  mapStateToProps,
  {
    addTextQuestionAction,
    addTextAnswerAction,
    addAnswerAction,
    changeCheckAction,
    changeRadioAction,
    changeTextAnswerCreateAction,
    saveQuestionAction,
    clearIntermediateValueQuestionAction,
    updateAnswerListAction,
  },
)(CreateQuestion);
