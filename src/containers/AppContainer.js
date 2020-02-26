import { connect } from 'react-redux';
import App from 'components/App';
import {
  changeAccessRights,
  addDataUser,
} from 'actions';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    changeAccessRights,
    addDataUser,
  },
)(App);
