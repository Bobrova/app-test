import { connect } from 'react-redux';
import Authorization from 'components/Authorization';
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
)(Authorization);
