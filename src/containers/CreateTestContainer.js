import { connect } from 'react-redux';
import CreateTest from 'components/CreateTest';
import { getCurrentIdTest, getDateCreate } from 'selectors';
import {
  addQuestionAction,
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
  deleteTestAction,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.common.addingQuestion,
  questionList: state.intermediateValueTest.questionList,
  nameTest: state.intermediateValueTest.nameTest,
  dateCreate: getDateCreate(state),
  nextIdTest: getCurrentIdTest(state),
  isEditTest: state.common.isEditTest,
  isEditQuestion: state.common.isEditQuestion,
  editIdTest: state.common.editIdTest,
  editIdQuestion: state.common.editIdQuestion,
});


export default connect(
  mapStateToProps,
  {
    addQuestionAction,
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
    deleteTestAction,
  },
)(CreateTest);
