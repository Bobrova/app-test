import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Test from 'components/Test';
import styles from './style.scss';

class Main extends Component {
  render() {
    const { testListMain, history } = this.props;
    const listTest = testListMain.map(item => (
      <div key={item.id} className={styles.listItem}>
        <Test
          item={item}
        />
      </div>
    ));

    return (
      <div className={styles.page}>
        <Header history={history} />
        <div className={styles.mainContent}>
          <Link to="/main/create-test" className={styles.btnCreateTest}>Создать тест</Link>
          <div className={styles.testList}>
            {listTest}
            <div className={styles.listItem}>
              <div className={styles.startTest}>Name</div>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


Main.propTypes = {
  testListMain: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
};

export default Main;
