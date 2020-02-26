import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Test extends Component {
  handleClickEditTest = () => {
    const {
      editTestAction,
      item,
      history,
      changeIdEditTestAction,
      setEditTestAction,
    } = this.props;
    editTestAction(item);
    changeIdEditTestAction(item.id);
    setEditTestAction(true);
    history.push('/main/create-test');
  }

  handleClickTest = () => {
    const { item, history, changeTakingTest } = this.props;
    changeTakingTest(item);
    history.push(`/main/test-${item.id}`);
  }

  render() {
    const { item } = this.props;
    return (
      <div className={styles.listItem}>
        <div className={styles.startTest} onClick={this.handleClickTest}>{item.nameTest}</div>
        <div className={`${styles.btnEdit} ${styles.btn}`} onClick={this.handleClickEditTest}>Редактировать</div>
      </div>
    );
  }
}


Test.propTypes = {
  item: PropTypes.object.isRequired,
  editTestAction: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  changeIdEditTestAction: PropTypes.func.isRequired,
  setEditTestAction: PropTypes.func.isRequired,
  changeTakingTest: PropTypes.func.isRequired,
};

export default Test;
