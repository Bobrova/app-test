import { connect } from 'react-redux';
import Main from 'components/Main';
import {
  editTestAction,
  changeIdEditTestAction,
  setEditTestAction,
  changeTakingTest,
  addRightAnswer,
  validationBlankFieldsAction,
  addDateCreate,
  clearIntermediateValueTestAction,
  getListRequestAction,
} from 'actions';

const mapStateToProps = state => ({
  first: state.common,
  testListMain: state.listTest,
  isAdmin: state.userData.isAdmin,
});

export default connect(
  mapStateToProps,
  {
    editTestAction,
    changeIdEditTestAction,
    setEditTestAction,
    changeTakingTest,
    addRightAnswer,
    validationBlankFieldsAction,
    addDateCreate,
    clearIntermediateValueTestAction,
    getListRequestAction,
  },
)(Main);
