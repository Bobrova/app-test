import { connect } from 'react-redux';
import Main from 'components/Main';
import {
  editTestAction,
  changeIdEditTestAction,
  setEditTestAction,
  changeTakingTest,
  addRightAnswer,
} from 'actions';

const mapStateToProps = state => ({
  first: state.common,
  testListMain: state.listTest,
  isAdmin: state.common.isAdmin,
});

export default connect(
  mapStateToProps,
  {
    editTestAction,
    changeIdEditTestAction,
    setEditTestAction,
    changeTakingTest,
    addRightAnswer,
  },
)(Main);
