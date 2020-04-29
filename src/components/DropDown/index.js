import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const DropDown = ({ changeTypeQuestionAction, addingQuestion, typeQuestion }) => {
  const handleChoiceOneOfList = () => {
    if (!addingQuestion) changeTypeQuestionAction('Один из списка');
  };

  const handleChoiceFewFromList = () => {
    if (!addingQuestion) changeTypeQuestionAction('Несколько из списка');
  };

  const handleChoiceNumericalAnswer = () => {
    if (!addingQuestion) changeTypeQuestionAction('Численный ответ');
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
      <div className={styles.dropDown_content}>
        <div
          className={styles.type}
          onClick={handleChoiceOneOfList}
        >
          Один из списка
        </div>
        <div
          className={styles.type}
          onClick={handleChoiceFewFromList}
        >
          Несколько из списка
        </div>
        <div
          className={styles.type}
          onClick={handleChoiceNumericalAnswer}
        >
          Численный ответ
        </div>
      </div>
    </div>
  );
};

DropDown.propTypes = {
  addingQuestion: PropTypes.bool.isRequired,
  typeQuestion: PropTypes.string.isRequired,
  changeTypeQuestionAction: PropTypes.func.isRequired,
};

export default DropDown;
