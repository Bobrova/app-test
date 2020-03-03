import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderContainer from 'containers/HeaderContainer';
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
      changeTakingTest,
      isAdmin,
      addRightAnswer,
      validationBlankFieldsAction,
    } = this.props;
    const listTest = testListMain.map(item => (
      <Test
        key={item.id}
        item={item}
        editTestAction={editTestAction}
        history={history}
        setEditTestAction={setEditTestAction}
        changeIdEditTestAction={changeIdEditTestAction}
        changeTakingTest={changeTakingTest}
        isAdmin={isAdmin}
        addRightAnswer={addRightAnswer}
        validationBlankFieldsAction={validationBlankFieldsAction}
      />
    ));
    const isEmptyList = listTest.length === 0;
    return (
      <div className={styles.page}>
        <HeaderContainer history={history} />
        <div className={styles.mainContent}>
          {isAdmin && <Link to="/main/create-test" className={styles.btnCreateTest}>Создать тест</Link>}
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
  changeTakingTest: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  addRightAnswer: PropTypes.func.isRequired,
  validationBlankFieldsAction: PropTypes.func.isRequired,
};

export default Main;
