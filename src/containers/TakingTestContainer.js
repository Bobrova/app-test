import { connect } from 'react-redux';
import TakingTest from 'components/TakingTest';
import {
  changeTakingTest,
  changeRadioAnswerAction,
  changeCheckboxAnswerAction,
  changeTextAnswerAction,
  showModalWindowAction,
} from 'actions';

const mapStateToProps = state => ({
  takingTest: state.takingTest,
  rightAnswersList: state.rightAnswersList,
  isModalWindow: state.common.isModalWindow,
});

export default connect(
  mapStateToProps,
  {
    changeTakingTest,
    changeRadioAnswerAction,
    changeCheckboxAnswerAction,
    changeTextAnswerAction,
    showModalWindowAction,
  },
)(TakingTest);
