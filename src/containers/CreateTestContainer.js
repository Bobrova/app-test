import { connect } from 'react-redux';
import CreateTest from 'components/CreateTest';
import {
  addQuestionAction,
  changeTypeQuestionAction,
  addTestAction,
  addTestNameAction,
  addInitialTwoAnswerAction,
  addInitialNumberAnswer,
  deleteQuestionAction,
  editQuestionAction,
  changeIdEditQuestion,
  setEditQuestion,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.first.addingQuestion,
  typeQuestion: state.first.typeQuestion,
  questionList: state.intermediateValueTest.questionList,
});


export default connect(
  mapStateToProps,
  {
    addQuestionAction,
    changeTypeQuestionAction,
    addTestAction,
    addTestNameAction,
    addInitialTwoAnswerAction,
    addInitialNumberAnswer,
    deleteQuestionAction,
    editQuestionAction,
    changeIdEditQuestion,
    setEditQuestion,
  },
)(CreateTest);
