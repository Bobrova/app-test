import { connect } from 'react-redux';
import CreateTest from 'components/CreateTest';
import { getCurrentIdTest, getDateCreate } from 'selectors';
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
  changeTypeModalWindowAction,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.common.addingQuestion,
  typeQuestion: state.common.typeQuestion,
  questionList: state.intermediateValueTest.questionList,
  nameTest: state.intermediateValueTest.nameTest,
  dateCreate: getDateCreate(state),
  nextIdTest: getCurrentIdTest(state),
  isEditTest: state.common.isEditTest,
  isEditQuestion: state.common.isEditQuestion,
  editIdTest: state.common.editIdTest,
  editIdQuestion: state.common.editIdQuestion,
  isModalWindow: state.common.isModalWindow,
  typeModalWindow: state.modalWindow.typeModalWindow,
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
    changeTypeModalWindowAction,
  },
)(CreateTest);
