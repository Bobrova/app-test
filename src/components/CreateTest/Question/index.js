import React from 'react';
import PropTypes from 'prop-types';
import iconEdit from 'img/edit-icon2.png';
import styles from './style.scss';

const Question = ({
  editQuestionAction,
  setCreatingQuestion,
  item,
  setidEditQuestion,
  setEditQuestionAction,
  deleteQuestionAction,
}) => {
  const handleClickDeleteQuestion = () => {
    deleteQuestionAction(item.id);
  };

  const handleClickEditQuestion = () => {
    editQuestionAction(item);
    setCreatingQuestion(true);
    setidEditQuestion(item.id);
    setEditQuestionAction(true);
  };

  return (
    <>
      <div className={styles.questionName}>{item.textQuestion}</div>
      <div
        className={styles.btnEdit}
        onClick={handleClickEditQuestion}
        style={{ backgroundImage: `URL("${iconEdit}")` }}
      />
      <div className={styles.btnDelete} onClick={handleClickDeleteQuestion} />
    </>
  );
};

Question.propTypes = {
  item: PropTypes.object.isRequired,
  deleteQuestionAction: PropTypes.func.isRequired,
  editQuestionAction: PropTypes.func.isRequired,
  setCreatingQuestion: PropTypes.func.isRequired,
  setidEditQuestion: PropTypes.func.isRequired,
  setEditQuestionAction: PropTypes.func.isRequired,
};

export default Question;
