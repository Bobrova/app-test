import React, { useState } from 'react';
import PropTypes from 'prop-types';

import iconEdit from 'img/edit-icon2.png';
import ModalWindow from 'components/ModalWindow';

import styles from './style.scss';

const Question = ({
  editQuestionAction,
  item,
  setidEditQuestion,
  deleteQuestionAction,
}) => {
  const [isModalWindow, setModalWindow] = useState(false);

  const handleClickDeleteQuestion = () => {
    setModalWindow(true);
  };

  const handleClickEditQuestion = () => {
    editQuestionAction(item);
    setidEditQuestion(item.id);
  };

  const clickConfirm = () => {
    deleteQuestionAction(item.id);
  };

  return (
    <div className={styles.question}>
      <div className={styles.questionName}>{item.textQuestion}</div>
      <div className={styles.adminFunctions}>
        <div
          className={styles.btnEdit}
          onClick={handleClickEditQuestion}
          style={{ backgroundImage: `URL("${iconEdit}")` }}
        />
        <div className={styles.btnDelete} onClick={handleClickDeleteQuestion} />
      </div>
      {isModalWindow && <ModalWindow
        typeModalWindow="Подтверждение"
        title="Удаление вопроса"
        contentModalWindow={{ text: 'Вы уверены что хотите удалить вопрос?' }}
        setModalWindow={setModalWindow}
        clickConfirm={clickConfirm}
      />}
    </div>
  );
};

Question.propTypes = {
  item: PropTypes.object.isRequired,
  deleteQuestionAction: PropTypes.func.isRequired,
  editQuestionAction: PropTypes.func.isRequired,
  setidEditQuestion: PropTypes.func.isRequired,
};

export default Question;
