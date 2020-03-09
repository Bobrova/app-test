import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Answer from 'components/Answer';
import styles from './style.scss';

class CreateQuestion extends Component {
  validationQuestion = () => {
    const { validationTextQuestionAction, textQuestion } = this.props;
    if (textQuestion === '') {
      validationTextQuestionAction(false);
      return false;
    }
    validationTextQuestionAction(true);
    return true;
  }

  validationAnswer = () => {
    const { validationQuestionAnswersAction, answerList, typeQuestion } = this.props;
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
      validationQuestionAnswersAction({ isAnswer: true, blankFields: [] });
      return true;
    }
    validationQuestionAnswersAction({ isAnswer, blankFields: arrayBlankFields });
    return false;
  }

  handleChangeTextQuestion = (e) => {
    const { addTextQuestionAction } = this.props;
    const { value } = e.target;
    addTextQuestionAction(value);
  }

  handleClickAddAnswer = () => {
    const { addAnswerAction, nextIdAnswer } = this.props;
    addAnswerAction(nextIdAnswer);
  }

  handleClickCloseQuestion = () => {
    const {
      closeAddingQuestionAction,
      clearIntermediateValueQuestionAction,
      isEditQuestion,
      setEditQuestionAction,
    } = this.props;
    closeAddingQuestionAction();
    clearIntermediateValueQuestionAction();
    if (isEditQuestion === true) setEditQuestionAction(false);
  }

  handleCkickSaveQuestion = () => {
    const {
      saveQuestionAction,
      textQuestion,
      answerList,
      closeAddingQuestionAction,
      typeQuestion,
      nextIdQuestion,
      isEditQuestion,
      setEditQuestionAction,
      editIdQuestion,
      clearIntermediateValueQuestionAction,
    } = this.props;
    if (!(this.validationQuestion()) || !(this.validationAnswer())) return;
    saveQuestionAction({
      id: isEditQuestion === false ? nextIdQuestion : editIdQuestion,
      textQuestion,
      answerList,
      typeQuestion,
    });
    if (isEditQuestion === true) setEditQuestionAction(false);
    closeAddingQuestionAction();
    clearIntermediateValueQuestionAction();
  }

  render() {
    const {
      typeQuestion,
      answerList,
      textQuestion,
      changeCheckAction,
      addAnswerAction,
      changeRadioAction,
      changeTextAnswerCreateAction,
      isTextQuestion,
      listBlankFields,
    } = this.props;
    const answers = answerList.map(item => {
      const validationError = listBlankFields.includes(item.id, 0);
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
          onChange={this.handleChangeTextQuestion}
          value={textQuestion}
        />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Варианты ответов:</p>
          <div className={styles.answerOptionsWrapper}>
            {answers}
            <div className={styles.btnAddAnswer} onClick={this.handleClickAddAnswer}>+</div>
            <div className={styles.blockSaveCancel}>
              <div className={styles.btnSave} onClick={this.handleCkickSaveQuestion}>Сохранить</div>
              <div className={styles.btnCancel} onClick={this.handleClickCloseQuestion}>Отмена</div>
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
          onChange={this.handleChangeTextQuestion}
          value={textQuestion}
        />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Варианты ответов:</p>
          <div className={styles.answerOptionsWrapper}>
            {answers}
            <div className={styles.btnAddAnswer} onClick={this.handleClickAddAnswer}>+</div>
            <div className={styles.blockSaveCancel}>
              <div className={styles.btnSave} onClick={this.handleCkickSaveQuestion}>Сохранить</div>
              <div className={styles.btnCancel} onClick={this.handleClickCloseQuestion}>Отмена</div>
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
          onChange={this.handleChangeTextQuestion}
          value={textQuestion}
        />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Ответ:</p>
          <div className={styles.answerOptionsWrapper}>
            {answers}
            <div className={styles.blockSaveCancel}>
              <div className={styles.btnSave} onClick={this.handleCkickSaveQuestion}>Сохранить</div>
              <div className={styles.btnCancel} onClick={this.handleClickCloseQuestion}>Отмена</div>
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
  }
}

CreateQuestion.propTypes = {
  typeQuestion: PropTypes.string.isRequired,
  addTextQuestionAction: PropTypes.func.isRequired,
  addAnswerAction: PropTypes.func.isRequired,
  changeCheckAction: PropTypes.func.isRequired,
  changeRadioAction: PropTypes.func.isRequired,
  nextIdAnswer: PropTypes.number.isRequired,
  closeAddingQuestionAction: PropTypes.func.isRequired,
  changeTextAnswerCreateAction: PropTypes.func.isRequired,
  saveQuestionAction: PropTypes.func.isRequired,
  textQuestion: PropTypes.string.isRequired,
  answerList: PropTypes.array.isRequired,
  nextIdQuestion: PropTypes.number.isRequired,
  editIdQuestion: PropTypes.number.isRequired,
  isEditQuestion: PropTypes.bool.isRequired,
  setEditQuestionAction: PropTypes.func.isRequired,
  clearIntermediateValueQuestionAction: PropTypes.func.isRequired,
  validationTextQuestionAction: PropTypes.func.isRequired,
  validationQuestionAnswersAction: PropTypes.func.isRequired,
  isTextQuestion: PropTypes.bool.isRequired,
  listBlankFields: PropTypes.array.isRequired,
};

export default CreateQuestion;
