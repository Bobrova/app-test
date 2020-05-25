import React from 'react';
import PropTypes from 'prop-types';

import iconEdit from 'img/edit-icon2.png';

import { day, month } from 'constants/constants';
import styles from './style.scss';

const Test = ({
  editTestAction,
  item,
  history,
  changeIdEditTestAction,
  setEditTestAction,
  isAdmin,
  setIdTest,
  setModalWindow,
}) => {
  const handleClickEditTest = () => {
    editTestAction(item);
    changeIdEditTestAction(item.id);
    setEditTestAction(true);
    history.push('/main/create-test');
  };

  const handleClickTest = () => {
    setModalWindow(true);
    setIdTest(item);
  };

  const createDate = d => {
    const date = new Date(d);
    const dateCreate = `${
      day[date.getDay()]
    } ${date.getDate()} ${
      month[date.getMonth()]
    } ${date.getFullYear()} г.`;
    return dateCreate;
  };

  return (
    <div className={styles.listItem}>
      <div className={styles.itemTest}>
        <div className={styles.startTest} onClick={handleClickTest}>
          <div className={styles.nameTest}>{item.nameTest}</div>
        </div>
        {
          isAdmin && (
            <div
              className={styles.btnEdit}
              onClick={handleClickEditTest}
              style={{ backgroundImage: `URL("${iconEdit}")` }}
            />
          )
        }
      </div>
      <div className={styles.itemDateCreate}>{createDate(item.dateCreate)}</div>
    </div>
  );
};

Test.propTypes = {
  item: PropTypes.object.isRequired,
  editTestAction: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  changeIdEditTestAction: PropTypes.func.isRequired,
  setEditTestAction: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  setModalWindow: PropTypes.func.isRequired,
  setIdTest: PropTypes.func.isRequired,
};

export default Test;
