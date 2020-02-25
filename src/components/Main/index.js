import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Test from 'components/Test';
import styles from './style.scss';

class Main extends Component {
  render() {
    const {
      testListMain,
      history,
      editTestAction,
      setEditTestAction,
      changeIdEditTestAction,
    } = this.props;
    const listTest = testListMain.map(item => (
      <div key={item.id} className={styles.listItem}>
        <Test
          item={item}
          editTestAction={editTestAction}
          history={history}
          setEditTestAction={setEditTestAction}
          changeIdEditTestAction={changeIdEditTestAction}
        />
      </div>
    ));
    const isEmptyList = listTest.length === 0;
    return (
      <div className={styles.page}>
        <Header history={history} />
        <div className={styles.mainContent}>
          <Link to="/main/create-test" className={styles.btnCreateTest}>Создать тест</Link>
          {
            isEmptyList ? (
              <div className={styles.emptyList}>Ничего нет</div>
            ) : (
              <div className={styles.testList}>{listTest}</div>
            )
          }
        </div>
      </div>
    );
  }
}


Main.propTypes = {
  testListMain: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  editTestAction: PropTypes.func.isRequired,
  changeIdEditTestAction: PropTypes.func.isRequired,
  setEditTestAction: PropTypes.func.isRequired,
};

export default Main;
