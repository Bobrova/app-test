import React from 'react';
import PropTypes from 'prop-types';
import iconEdit from 'img/edit-icon2.png';
import styles from './style.scss';

const Test = ({
  editTestAction,
  item,
  history,
  changeIdEditTestAction,
  setEditTestAction,
  changeTakingTest,
  addRightAnswer,
  validationBlankFieldsAction,
  isAdmin,
}) => {
  const handleClickEditTest = () => {
    editTestAction(item);
    changeIdEditTestAction(item.id);
    setEditTestAction(true);
    history.push('/main/create-test');
  };

  const handleClickTest = () => {
    const listWithoutAnswer = {
      ...item,
      questionList: item.questionList.map((questionItem) => ({
        ...questionItem,
        answerList: questionItem.answerList.map((item) => questionItem.typeQuestion === 'Численный ответ'
          ? { ...item, textAnswer: '' }
          : { ...item, check: false }),
      })),
    };

    changeTakingTest(listWithoutAnswer);
    const rightAnswer = item.questionList.map((itemQuestion) => ({
      answer: itemQuestion.answerList.map((itemAnswer) => itemQuestion.typeQuestion === 'Численный ответ'
        ? itemAnswer.textAnswer
        : itemAnswer.check),
      id: itemQuestion.id,
      typeQuestion: itemQuestion.typeQuestion,
    }));
    addRightAnswer(rightAnswer);
    validationBlankFieldsAction([]);
    history.push(`/main/test-${item.id}`);
  };

  return (
    <div className={styles.listItem}>
      <div className={styles.itemTest}>
        <div className={styles.startTest} onClick={handleClickTest}>
          <div className={styles.nameTest}>
            <p>{item.nameTest}</p>
          </div>
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
      <div className={styles.itemDateCreate}>{item.dateCreate}</div>
    </div>
  );
};

Test.propTypes = {
  item: PropTypes.object.isRequired,
  editTestAction: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  changeIdEditTestAction: PropTypes.func.isRequired,
  setEditTestAction: PropTypes.func.isRequired,
  changeTakingTest: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  addRightAnswer: PropTypes.func.isRequired,
  validationBlankFieldsAction: PropTypes.func.isRequired,
};

export default Test;
