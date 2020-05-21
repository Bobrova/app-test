import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from 'containers/HeaderContainer';
import { day, month } from 'constants/constants';
import Footer from 'components/Footer';
import Test from 'components/Test';
import styles from './style.scss';

const Main = ({
  history,
  addDateCreate,
  testListMain,
  editTestAction,
  setEditTestAction,
  changeIdEditTestAction,
  changeTakingTest,
  isAdmin,
  addRightAnswer,
  validationBlankFieldsAction,
  clearIntermediateValueTestAction,
}) => {
  const [isSortName, setSortName] = useState(0);
  const [isSortDate, setSortDate] = useState(0);
  const handleClickSortName = () => {
    if (isSortName === 0) {
      setSortName(1);
    } else {
      setSortName(isSortName === 1 ? 2 : 1);
    }
    setSortDate(0);
  };

  const handleClickSortDate = () => {
    if (isSortDate === 0) {
      setSortDate(1);
    } else {
      setSortDate(isSortDate === 1 ? 2 : 1);
    }
    setSortName(0);
  };

  const createDate = () => {
    const date = new Date();
    const dateCreate = `${
      day[date.getDay()]
    } ${date.getDate()} ${
      month[date.getMonth()]
    } ${date.getFullYear()} г.`;
    return dateCreate;
  };

  const handleClickCreateTest = () => {
    clearIntermediateValueTestAction();
    const dateCreate = createDate();
    addDateCreate(dateCreate);
    history.push('/main/create-test');
  };

  if (isSortName === 1) {
    testListMain.sort((a, b) => {
      const nameA = a.nameTest.toLowerCase();
      const nameB = b.nameTest.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  } else if (isSortName === 2) {
    testListMain.sort((a, b) => {
      const nameA = a.nameTest.toLowerCase();
      const nameB = b.nameTest.toLowerCase();
      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0;
    });
  }
  if (isSortDate === 1) {
    testListMain.sort((a, b) => {
      const dateA = new Date(a.dateCreate);
      const dateB = new Date(b.dateCreate);
      return dateB - dateA;
    });
  } else if (isSortDate === 2) {
    testListMain.sort((a, b) => {
      const dateA = new Date(a.dateCreate);
      const dateB = new Date(b.dateCreate);
      return dateA - dateB;
    });
  }
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
        {
          isAdmin && (
            <div className={styles.btnCreateTest} onClick={handleClickCreateTest}>
              Создать тест
            </div>
          )
        }
        <div className={styles.list}>
          <div className={styles.sortMenu}>
            <div className={styles.sortName} onClick={handleClickSortName}>
              Название
            </div>
            <div className={styles.sortDate} onClick={handleClickSortDate}>
              Дата создания
            </div>
          </div>
          {isEmptyList ? (
            <div className={styles.emptyList}>Добавьте тестики</div>
          ) : (
            <div className={styles.testList}>{listTest}</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

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
  addDateCreate: PropTypes.func.isRequired,
  clearIntermediateValueTestAction: PropTypes.func.isRequired,
};

export default Main;
