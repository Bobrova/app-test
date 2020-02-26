import { connect } from 'react-redux';
import Header from 'components/Header';

const mapStateToProps = state => ({
  userName: state.common.userData.login ? state.common.userData.login : 'name',
});

export default connect(
  mapStateToProps,
  {},
)(Header);
