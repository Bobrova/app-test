import { connect } from 'react-redux';
import Main from 'components/Main';
import {
  addFirstAction,
} from 'actions';

const mapStateToProps = state => ({
  first: state.first,
});

export default connect(
  mapStateToProps,
  {
    addFirstAction,
  },
)(Main);
