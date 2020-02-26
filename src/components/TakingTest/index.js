import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class TakingTest extends Component {
  render() {
    const { itemTakingTest } = this.props;
    console.log(itemTakingTest);
    return (
      <div className={styles.page}>
        <span>Здесь проходим тесты</span>
      </div>
    );
  }
}

TakingTest.propTypes = {
  itemTakingTest: PropTypes.object.isRequired,
  // history: PropTypes.object.isRequired,
};

export default TakingTest;
