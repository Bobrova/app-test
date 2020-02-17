import { connect } from 'react-redux';
import CreateTest from 'components/CreateTest';
import {
  addQuestionAction,
  changeTypeQuestionAction,
  addTestAction,
  addTestNameAction,
  addTextQuestionAction,
  addTextAnswerAction,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.first.addingQuestion,
  typeQuestion: state.first.typeQuestion,
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
  },
)(CreateTest);
