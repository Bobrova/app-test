import { connect } from 'react-redux';
import Header from 'components/Header';

const mapStateToProps = state => ({
  userName: state.userData.login ? state.userData.login : 'name',
});

export default connect(
  mapStateToProps,
  {},
)(Header);
