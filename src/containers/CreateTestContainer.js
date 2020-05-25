import { connect } from 'react-redux';
import CreateTest from 'components/CreateTest';
import {
  getCurrentIdTestSelector,
  getDateCreateSelector,
  getQuestionListSelector,
  getNameTestSelector,
  getIsEditTestSelector,
  getEditIdTestSelector,
} from 'selectors';
import {
  addQuestionAction,
  addTestNameAction,
  addInitialTwoAnswerAction,
  addInitialNumberAnswer,
  addInitialThreeAnswerAction,
  deleteQuestionAction,
  editQuestionAction,
  clearIntermediateValueTestAction,
  setEditTestAction,
  postTestRequestAction,
  putTestRequestAction,
  deleteTestRequestAction,
} from 'actions';

const mapStateToProps = state => ({
  questionList: getQuestionListSelector(state),
  nameTest: getNameTestSelector(state),
  dateCreate: getDateCreateSelector(state),
  nextIdTest: getCurrentIdTestSelector(state),
  isEditTest: getIsEditTestSelector(state),
  editIdTest: getEditIdTestSelector(state),
});


export default connect(
  mapStateToProps,
  {
    addQuestionAction,
    addTestNameAction,
    addInitialTwoAnswerAction,
    addInitialNumberAnswer,
    addInitialThreeAnswerAction,
    deleteQuestionAction,
    editQuestionAction,
    clearIntermediateValueTestAction,
    setEditTestAction,
    postTestRequestAction,
    putTestRequestAction,
    deleteTestRequestAction,
  },
)(CreateTest);
