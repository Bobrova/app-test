import React from 'react';
import PropTypes from 'prop-types';

import CreateQuestionContainer from 'containers/CreateQuestionContainer';
import Question from 'components/CreateTest/QuestionList/Question';

import styles from './style.scss';

const QuestionList = ({
  isCreatingQuestion,
  questionList,
  deleteQuestionAction,
  editQuestionAction,
  idQuestionEdit,
  setidEditQuestion,
}) => {
  const questions = questionList.map(item => (
    <div key={item.id} className={styles.listItem}>
      {idQuestionEdit === item.id && idQuestionEdit !== -1 ? (
        <CreateQuestionContainer
          idQuestionEdit={idQuestionEdit}
          setidEditQuestion={setidEditQuestion}
        />
      ) : (
        <Question
          item={item}
          deleteQuestionAction={deleteQuestionAction}
          editQuestionAction={editQuestionAction}
          setidEditQuestion={setidEditQuestion}
          idQuestionEdit={idQuestionEdit}
          isCreatingQuestion={isCreatingQuestion}
        />
      )}
    </div>
  ));
  const isEmptyQuestionList = questions.length === 0;

  return (
    <>
      {
      (isEmptyQuestionList && !isCreatingQuestion)
        ? <div className={styles.emptyList}>Ничего нет</div>
        : questions
      }
    </>
  );
};

QuestionList.propTypes = {
  isCreatingQuestion: PropTypes.bool.isRequired,
  questionList: PropTypes.array.isRequired,
  idQuestionEdit: PropTypes.number.isRequired,
  deleteQuestionAction: PropTypes.func.isRequired,
  editQuestionAction: PropTypes.func.isRequired,
  setidEditQuestion: PropTypes.func.isRequired,
};

export default QuestionList;
