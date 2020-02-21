import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Test extends Component {
  render() {
    const { item } = this.props;
    return (
      <>
        <div className={styles.startTest}>{item.nameTest}</div>
        <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
      </>
    );
  }
}


Test.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Test;
