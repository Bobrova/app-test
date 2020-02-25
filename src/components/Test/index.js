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

  render() {
    const { item } = this.props;
    return (
      <>
        <div className={styles.startTest}>{item.nameTest}</div>
        <div className={`${styles.btnEdit} ${styles.btn}`} onClick={this.handleClickEditTest}>Редактировать</div>
      </>
    );
  }
}


Test.propTypes = {
  item: PropTypes.object.isRequired,
  editTestAction: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  changeIdEditTestAction: PropTypes.func.isRequired,
  setEditTestAction: PropTypes.func.isRequired,
};

export default Test;
