import { connect } from 'react-redux';
import Main from 'components/Main';
import {
  editTestAction,
  changeIdEditTestAction,
  setEditTestAction,
  changeTakingTest,
  addRightAnswer,
  validationBlankFieldsAction,
  setSortName,
  setSortDate,
  addDateCreate,
} from 'actions';

const mapStateToProps = state => ({
  first: state.common,
  testListMain: state.listTest,
  isAdmin: state.userData.isAdmin,
  isSortName: state.common.isSortName,
  isSortDate: state.common.isSortDate,
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
    setSortName,
    setSortDate,
    addDateCreate,
  },
)(Main);
