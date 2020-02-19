import { connect } from 'react-redux';
import CreateTest from 'components/CreateTest';
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
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.first.addingQuestion,
  typeQuestion: state.first.typeQuestion,
  listAnswer: state.intermediateValueQuestion.answerList,
  currentId: state.intermediateValueQuestion.answerList.length,
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
  },
)(CreateTest);
