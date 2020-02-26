import { connect } from 'react-redux';
import TakingTest from 'components/TakingTest';
import {
  changeTakingTest,
} from 'actions';

const mapStateToProps = state => ({
  itemTakingTest: state.takingTest,
});

export default connect(
  mapStateToProps,
  {
    changeTakingTest,
  },
)(TakingTest);
