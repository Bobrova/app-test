import { connect } from 'react-redux';
import TakingTest from 'components/TakingTest';
import { getTakingTestSelector, getRightAnswersListSelector } from 'selectors';
import {
  changeTakingTest,
  changeRadioAnswerAction,
  changeCheckboxAnswerAction,
  changeTextAnswerAction,
} from 'actions';

const mapStateToProps = state => ({
  takingTest: getTakingTestSelector(state),
  rightAnswersList: getRightAnswersListSelector(state),
});

export default connect(
  mapStateToProps,
  {
    changeTakingTest,
    changeRadioAnswerAction,
    changeCheckboxAnswerAction,
    changeTextAnswerAction,
  },
)(TakingTest);
