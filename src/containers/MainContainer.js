import { connect } from 'react-redux';
import Main from 'components/Main';
import {
  addFirstAction,
  editTestAction,
  changeIdEditTestAction,
  setEditTestAction,
} from 'actions';

const mapStateToProps = state => ({
  first: state.first,
  testListMain: state.listTest,
});

export default connect(
  mapStateToProps,
  {
    addFirstAction,
    editTestAction,
    changeIdEditTestAction,
    setEditTestAction,
  },
)(Main);
