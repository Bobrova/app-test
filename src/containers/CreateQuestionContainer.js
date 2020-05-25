import { connect } from 'react-redux';
import CreateQuestion from 'components/CreateQuestion';
import {
  getCurrentIdAnswerSelector,
  getCurrentIdQuestionSelector,
  getTextQuestionSelector,
  getAnswerListSelector,
  getTypeQuestionSelector,
} from 'selectors';
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
  typeQuestion: state.intermediateValueQuestion.typeQuestion === '' ? props.typeQuestion : getTypeQuestionSelector(state),
  nextIdAnswer: getCurrentIdAnswerSelector(state),
  nextIdQuestion: getCurrentIdQuestionSelector(state),
  textQuestion: getTextQuestionSelector(state),
  answerList: getAnswerListSelector(state),
  setCreatingQuestion: props.setCreatingQuestion,
  setidEditQuestion: props.setidEditQuestion,
  idQuestionEdit: props.idQuestionEdit,
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
