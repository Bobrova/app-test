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
  deleteTestAction,
  clearTypeQuestionAction,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.common.addingQuestion,
  typeQuestion: state.common.typeQuestion,
  questionList: state.intermediateValueTest.questionList,
  nameTest: state.intermediateValueTest.nameTest,
  nextIdTest: getCurrentIdTest(state),
  isEditTest: state.common.isEditTest,
  isEditQuestion: state.common.isEditQuestion,
  editIdTest: state.common.editIdTest,
  editIdQuestion: state.common.editIdQuestion,
  isModalWindow: state.common.isModalWindow,
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
    deleteTestAction,
    clearTypeQuestionAction,
  },
)(CreateTest);
