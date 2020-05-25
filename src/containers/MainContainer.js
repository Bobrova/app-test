import { connect } from 'react-redux';
import Main from 'components/Main';
import { getTestListSelector, getIsAdminSelector } from 'selectors';
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
  testListMain: getTestListSelector(state),
  isAdmin: getIsAdminSelector(state),
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
