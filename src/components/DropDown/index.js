import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

const DropDown = ({
  idQuestionEdit,
  isCreatingQuestion,
  typeQuestion,
  setTypeQuestion,
}) => {
  const handleOneOfListChoice = () => {
    setTypeQuestion('Один из списка');
  };

  const handleFewFromListChoice = () => {
    setTypeQuestion('Несколько из списка');
  };

  const handleNumericalAnswerChoice = () => {
    setTypeQuestion('Численный ответ');
  };

  return (
    <div className={styles.root}>
      {
      typeQuestion !== '' ? (
        <div className={styles.dropDown_label}>{typeQuestion}</div>
      ) : (
        <div className={styles.dropDown_label}>Выберете тип вопроса</div>
      )
      }
      {(idQuestionEdit === -1 && !isCreatingQuestion) && (
        <div className={styles.dropDown_content}>
          <div
            className={styles.type}
            onClick={handleOneOfListChoice}
          >
            Один из списка
          </div>
          <div
            className={styles.type}
            onClick={handleFewFromListChoice}
          >
            Несколько из списка
          </div>
          <div
            className={styles.type}
            onClick={handleNumericalAnswerChoice}
          >
            Численный ответ
          </div>
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  idQuestionEdit: PropTypes.number.isRequired,
  isCreatingQuestion: PropTypes.bool.isRequired,
  typeQuestion: PropTypes.string.isRequired,
  setTypeQuestion: PropTypes.func.isRequired,
};

export default DropDown;
