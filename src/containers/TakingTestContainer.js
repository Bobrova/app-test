import { connect } from 'react-redux';
import TakingTest from 'components/TakingTest';
import {
  changeTakingTest,
  changeRadioAnswerAction,
  changeCheckboxAnswerAction,
  changeTextAnswerAction,
  addResultModalAction,
  changeTypeModalWindowAction,
  showModalWindowAction,
  validationBlankFieldsAction,
} from 'actions';

const mapStateToProps = state => ({
  takingTest: state.takingTest,
  rightAnswersList: state.rightAnswersList,
  numberCorrectQuestion: state.modalWindow.number,
  typeModalWindow: state.modalWindow.typeModalWindow,
  listBlankFields: state.validation.listBlankFields,
  isModalWindow: state.common.isModalWindow,
});

export default connect(
  mapStateToProps,
  {
    changeTakingTest,
    changeRadioAnswerAction,
    changeCheckboxAnswerAction,
    changeTextAnswerAction,
    addResultModalAction,
    changeTypeModalWindowAction,
    showModalWindowAction,
    validationBlankFieldsAction,
  },
)(TakingTest);
