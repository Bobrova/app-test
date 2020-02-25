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
  setEditTestAction,
  showModalWindowAction,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.first.addingQuestion,
  typeQuestion: state.first.typeQuestion,
  questionList: state.intermediateValueTest.questionList,
  nameTest: state.intermediateValueTest.nameTest,
  nextIdTest: getCurrentIdTest(state),
  isEditTest: state.first.isEditTest,
  editIdTest: state.first.editIdTest,
  isModalWindow: state.first.isModalWindow,
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
    setEditTestAction,
    showModalWindowAction,
  },
)(CreateTest);
