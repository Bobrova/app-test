import { connect } from 'react-redux';
import CreateTest from 'components/CreateTest';
import {
  addQuestionAction,
} from 'actions';

const mapStateToProps = state => ({
  addingQuestion: state.first.addingQuestion,
});


export default connect(
  mapStateToProps,
  {
    addQuestionAction,
  },
)(CreateTest);
