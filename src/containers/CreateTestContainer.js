import { connect } from 'react-redux';
import CreateTest from 'components/CreateTest';
import { getCurrentIdTest } from 'selectors';
import {
  addQuestionAction,
  changeTypeQuestionAction,
  saveTestAction,
  addTestNameAction,
  addInitialTwoAnswerAction,
  addInitialNumberAnswer,
  deleteQuestionAction,
  editQuestionAction,
  changeIdEditQuestionAction,
  setEditQuestionAction,
  clearIntermediateValueTestAction,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.first.addingQuestion,
  typeQuestion: state.first.typeQuestion,
  questionList: state.intermediateValueTest.questionList,
  nameTest: state.intermediateValueTest.nameTest,
  nextIdTest: getCurrentIdTest(state),
});


export default connect(
  mapStateToProps,
  {
    addQuestionAction,
    changeTypeQuestionAction,
    saveTestAction,
    addTestNameAction,
    addInitialTwoAnswerAction,
    addInitialNumberAnswer,
    deleteQuestionAction,
    editQuestionAction,
    changeIdEditQuestionAction,
    setEditQuestionAction,
    clearIntermediateValueTestAction,
  },
)(CreateTest);
