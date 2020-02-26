import { connect } from 'react-redux';
import Main from 'components/Main';
import {
  addFirstAction,
  editTestAction,
  changeIdEditTestAction,
  setEditTestAction,
  changeTakingTest,
} from 'actions';

const mapStateToProps = state => ({
  first: state.common,
  testListMain: state.listTest,
  isAdmin: state.common.isAdmin,
});

export default connect(
  mapStateToProps,
  {
    addFirstAction,
    editTestAction,
    changeIdEditTestAction,
    setEditTestAction,
    changeTakingTest,
  },
)(Main);
