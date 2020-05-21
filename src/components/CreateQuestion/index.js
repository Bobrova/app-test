import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Answer from 'components/Answer';
import styles from './style.scss';

const CreateQuestion = ({
  typeQuestion,
  answerList,
  textQuestion,
  changeCheckAction,
  addAnswerAction,
  changeRadioAction,
  changeTextAnswerCreateAction,
  addTextQuestionAction,
  saveQuestionAction,
  nextIdQuestion,
  isEditQuestion,
  setEditQuestionAction,
  idQuestionEdit,
  clearIntermediateValueQuestionAction,
  nextIdAnswer,
  setCreatingQuestion,
  setidEditQuestion,
}) => {
  const [validationBlankFilds, setValidationBlankFilds] = useState([]);
  const [isTextQuestion, setTextQuestion] = useState(true);
  const validationQuestion = () => {
    if (textQuestion === '') {
      setTextQuestion(false);
      return false;
    }
    setTextQuestion(true);
    return true;
  };

  const validationAnswer = () => {
    let isAnswer = false;
    let isTextAnswer = false;
    let counterRightAnswers = 0;
    const arrayBlankFields = [];
    switch (typeQuestion) {
      case 'Численный ответ':
        for (let i = 0; i < answerList.length; i += 1) {
          isTextAnswer = !(answerList[i].textAnswer === '');
        }
        isAnswer = isTextAnswer;
        break;
      case 'Несколько из списка':
        for (let i = 0; i < answerList.length; i += 1) {
          if (answerList[i].check) counterRightAnswers += 1;
          if (counterRightAnswers > 1) {
            isAnswer = true;
          }
          isTextAnswer = !(answerList[i].textAnswer === '');
          if (isTextAnswer === false) arrayBlankFields.push(answerList[i].id);
        }
        break;
      case 'Один из списка':
        for (let i = 0; i < answerList.length; i += 1) {
          if (answerList[i].check) {
            isAnswer = true;
          }
          isTextAnswer = !(answerList[i].textAnswer === '');
          if (isTextAnswer === false) arrayBlankFields.push(answerList[i].id);
        }
        break;
      default: break;
    }
    if (isAnswer && isTextAnswer) {
      setValidationBlankFilds([]);
      return true;
    }
    setValidationBlankFilds(arrayBlankFields);
    return false;
  };

  const handleChangeTextQuestion = (e) => {
    const { value } = e.target;
    addTextQuestionAction(value);
  };

  const handleClickAddAnswer = () => {
    addAnswerAction(nextIdAnswer);
  };

  const handleClickCloseQuestion = () => {
    setCreatingQuestion(false);
    clearIntermediateValueQuestionAction();
    if (isEditQuestion === true) setEditQuestionAction(false);
  };

  const handleCkickSaveQuestion = () => {
    if (!(validationQuestion()) || !(validationAnswer())) return;
    saveQuestionAction({
      id: isEditQuestion === false ? nextIdQuestion : idQuestionEdit,
      textQuestion,
      answerList,
      typeQuestion,
    });
    if (isEditQuestion === true) {
      setEditQuestionAction(false);
      setidEditQuestion(-1);
    }
    setCreatingQuestion(false);
    clearIntermediateValueQuestionAction();
  };

  const answers = answerList.map(item => {
    const validationError = validationBlankFilds.includes(item.id, 0);
    const answerClass = classNames(
      styles.answerText,
      { [styles.validationErrorAnswerText]: validationError },
    );
    return (
      <div key={item.id}>
        <Answer
          item={item}
          typeQuestion={typeQuestion}
          changeCheckAction={changeCheckAction}
          key={item.id}
          addAnswerAction={addAnswerAction}
          changeRadioAction={changeRadioAction}
          changeTextAnswerCreateAction={changeTextAnswerCreateAction}
          answerClass={answerClass}
        />
      </div>);
  });
  const questionClass = classNames(
    styles.questionText,
    { [styles.validationErrorTextQuestion]: !isTextQuestion },
  );
  const questionOneOfList = (
    <div className={styles.addQuestion}>
      <p className={styles.typeQuestion}>{typeQuestion}</p>
      <textarea
        className={questionClass}
        placeholder="Текст вопроса"
        onChange={handleChangeTextQuestion}
        value={textQuestion}
      />
      <div className={styles.answerOptions}>
        <p className={styles.answerOptionsTitle}>Варианты ответов:</p>
        <div className={styles.answerOptionsWrapper}>
          {answers}
          <div className={styles.btnAddAnswer} onClick={handleClickAddAnswer}>+</div>
          <div className={styles.blockSaveCancel}>
            <div className={styles.btnSave} onClick={handleCkickSaveQuestion}>Сохранить</div>
            <div className={styles.btnCancel} onClick={handleClickCloseQuestion}>Отмена</div>
          </div>
        </div>
      </div>
    </div>
  );
  const questionFewFromList = (
    <div className={styles.addQuestion}>
      <p className={styles.typeQuestion}>{typeQuestion}</p>
      <textarea
        className={questionClass}
        placeholder="Текст вопроса"
        onChange={handleChangeTextQuestion}
        value={textQuestion}
      />
      <div className={styles.answerOptions}>
        <p className={styles.answerOptionsTitle}>Варианты ответов:</p>
        <div className={styles.answerOptionsWrapper}>
          {answers}
          <div className={styles.btnAddAnswer} onClick={handleClickAddAnswer}>+</div>
          <div className={styles.blockSaveCancel}>
            <div className={styles.btnSave} onClick={handleCkickSaveQuestion}>Сохранить</div>
            <div className={styles.btnCancel} onClick={handleClickCloseQuestion}>Отмена</div>
          </div>
        </div>
      </div>
    </div>
  );
  const questionNumericalAnswer = (
    <div className={styles.addQuestion}>
      <p className={styles.typeQuestion}>{typeQuestion}</p>
      <textarea
        className={questionClass}
        placeholder="Текст вопроса"
        onChange={handleChangeTextQuestion}
        value={textQuestion}
      />
      <div className={styles.answerOptions}>
        <p className={styles.answerOptionsTitle}>Ответ:</p>
        <div className={styles.answerOptionsWrapper}>
          {answers}
          <div className={styles.blockSaveCancel}>
            <div className={styles.btnSave} onClick={handleCkickSaveQuestion}>Сохранить</div>
            <div className={styles.btnCancel} onClick={handleClickCloseQuestion}>Отмена</div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {typeQuestion === 'Один из списка' && questionOneOfList}
      {typeQuestion === 'Несколько из списка' && questionFewFromList}
      {typeQuestion === 'Численный ответ' && questionNumericalAnswer}
    </>
  );
};

CreateQuestion.propTypes = {
  typeQuestion: PropTypes.string.isRequired,
  addTextQuestionAction: PropTypes.func.isRequired,
  addAnswerAction: PropTypes.func.isRequired,
  changeCheckAction: PropTypes.func.isRequired,
  changeRadioAction: PropTypes.func.isRequired,
  nextIdAnswer: PropTypes.number.isRequired,
  setCreatingQuestion: PropTypes.func.isRequired,
  changeTextAnswerCreateAction: PropTypes.func.isRequired,
  saveQuestionAction: PropTypes.func.isRequired,
  textQuestion: PropTypes.string.isRequired,
  answerList: PropTypes.array.isRequired,
  nextIdQuestion: PropTypes.number.isRequired,
  idQuestionEdit: PropTypes.number,
  setidEditQuestion: PropTypes.func,
  isEditQuestion: PropTypes.bool.isRequired,
  setEditQuestionAction: PropTypes.func.isRequired,
  clearIntermediateValueQuestionAction: PropTypes.func.isRequired,
};

CreateQuestion.defaultProps = {
  idQuestionEdit: -1,
  setidEditQuestion: null,
};

export default CreateQuestion;
//  244
