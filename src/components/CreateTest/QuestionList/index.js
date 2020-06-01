import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CreateQuestionContainer from 'containers/CreateQuestionContainer';
import Question from 'components/CreateTest/QuestionList/Question';

import styles from './style.scss';

const CreateTest = ({
  questionList,
  deleteQuestionAction,
  editQuestionAction,
}) => {
  const [idQuestionEdit, setidEditQuestion] = useState(-1);

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
        />
      )}
    </div>
  ));
  const isEmptyQuestionList = questions.length === 0;

  return (
    <>
      {
      (isEmptyQuestionList)
        ? <div className={styles.emptyList}>Ничего нет</div>
        : questions
      }
    </>
  );
};

CreateTest.propTypes = {
  questionList: PropTypes.array.isRequired,
  deleteQuestionAction: PropTypes.func.isRequired,
  editQuestionAction: PropTypes.func.isRequired,
};

export default CreateTest;
