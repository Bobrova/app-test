import { connect } from 'react-redux';
import TakingTest from 'components/TakingTest';
import {
  changeTakingTest,
  changeRadioAnswerAction,
  changeCheckboxAnswerAction,
} from 'actions';

const mapStateToProps = state => ({
  itemTakingTest: state.takingTest,
});

export default connect(
  mapStateToProps,
  {
    changeTakingTest,
    changeRadioAnswerAction,
    changeCheckboxAnswerAction,
  },
)(TakingTest);
