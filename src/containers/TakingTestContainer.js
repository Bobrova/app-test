import { connect } from 'react-redux';
import TakingTest from 'components/TakingTest';
import {
  changeTakingTest,
  changeRadioAnswerAction,
  changeCheckboxAnswerAction,
  changeTextAnswerAction,
  addTextResultModalAction,
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
});

export default connect(
  mapStateToProps,
  {
    changeTakingTest,
    changeRadioAnswerAction,
    changeCheckboxAnswerAction,
    changeTextAnswerAction,
    addTextResultModalAction,
    changeTypeModalWindowAction,
    showModalWindowAction,
    validationBlankFieldsAction,
  },
)(TakingTest);
