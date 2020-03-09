import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HeaderContainer from 'containers/HeaderContainer';
import Footer from 'components/Footer';
import Test from 'components/Test';
import styles from './style.scss';

class Main extends Component {
  handleClickSortName = () => {
    const { setSortName, setSortDate } = this.props;
    setSortDate(false);
    setSortName(true);
  }

  handleClickSortDate = () => {
    const { setSortDate, setSortName } = this.props;
    setSortName(false);
    setSortDate(true);
  }

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
      isSortName,
      isSortDate,
    } = this.props;
    if (isSortName) {
      console.log('а что вы тут делаете?');
      testListMain.sort((a, b) => {
        const nameA = a.nameTest.toLowerCase();
        const nameB = b.nameTest.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
    if (isSortDate) {
      testListMain.sort((a, b) => {
        const dateA = new Date(a.dateCreate);
        const dateB = new Date(b.dateCreate);
        console.log(dateA, 'dateA');
        console.log(dateB, 'dateB');
        return dateB - dateA;
      });
    }
    console.log(testListMain);
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
          <div className={styles.sortMenu}>
            <div className={styles.sortName} onClick={this.handleClickSortName}>Название</div>
            <div className={styles.sortDate} onClick={this.handleClickSortDate}>Дата создания</div>
          </div>
          {
            isEmptyList ? (
              <div className={styles.emptyList}>Ничего нет</div>
            ) : (
              <div className={styles.testList}>{listTest}</div>
            )
          }
        </div>
        <Footer />
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
  isSortName: PropTypes.bool.isRequired,
  setSortName: PropTypes.func.isRequired,
  isSortDate: PropTypes.bool.isRequired,
  setSortDate: PropTypes.func.isRequired,
};

export default Main;
