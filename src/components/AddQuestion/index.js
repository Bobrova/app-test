import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from 'components/Answer';
import styles from './style.scss';

class AddQuestion extends Component {
  handleChangeTextQuestion = (e) => {
    const { addTextQuestionAction } = this.props;
    const { value } = e.target;
    addTextQuestionAction(value);
  }

  handleClickAddAnswer = () => {
    const { addAnswerAction, answerId } = this.props;
    addAnswerAction(answerId);
  }

  handleClickCloseQuestion = () => {
    const { closeAddingQuestionAction } = this.props;
    closeAddingQuestionAction();
  }

  handleCkickSaveQuestion = () => {
    const {
      saveQuestionAction,
      textQuestion,
      answerList,
      closeAddingQuestionAction,
      typeQuestion,
      questionId,
    } = this.props;
    saveQuestionAction({
      id: questionId,
      textQuestion,
      answerList,
      typeQuestion,
    });
    closeAddingQuestionAction();
  }

  render() {
    const {
      typeQuestion,
      listAnswer,
      changeCheckAction,
      addAnswerAction,
      changeRadioAction,
      changeTextAnswerAction,
    } = this.props;
    const answerList = listAnswer.map(item => (
      <div key={item.id}>
        <Answer
          item={item}
          typeQuestion={typeQuestion}
          changeCheckAction={changeCheckAction}
          key={item.id}
          addAnswerAction={addAnswerAction}
          changeRadioAction={changeRadioAction}
          changeTextAnswerAction={changeTextAnswerAction}
        />
      </div>
    ));
    const questionOneOfList = (
      <div className={styles.addQuestion}>
        <p className={styles.typeQuestion}>{typeQuestion}</p>
        <textarea className={styles.questionText} placeholder="Текст вопроса" onChange={this.handleChangeTextQuestion} />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Варианты ответов:</p>
          <div className={styles.answerOptionsWrapper}>
            {answerList}
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
        <textarea className={styles.questionText} placeholder="Текст вопроса" onChange={this.handleChangeTextQuestion} />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Варианты ответов:</p>
          <div className={styles.answerOptionsWrapper}>
            {answerList}
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
        <textarea className={styles.questionText} placeholder="Текст вопроса" onChange={this.handleChangeTextQuestion} />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Ответ:</p>
          <div className={styles.answerOptionsWrapper}>
            {answerList}
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

AddQuestion.propTypes = {
  typeQuestion: PropTypes.string.isRequired,
  addTextQuestionAction: PropTypes.func.isRequired,
  addAnswerAction: PropTypes.func.isRequired,
  listAnswer: PropTypes.array.isRequired,
  changeCheckAction: PropTypes.func.isRequired,
  changeRadioAction: PropTypes.func.isRequired,
  answerId: PropTypes.number.isRequired,
  closeAddingQuestionAction: PropTypes.func.isRequired,
  changeTextAnswerAction: PropTypes.func.isRequired,
  saveQuestionAction: PropTypes.func.isRequired,
  textQuestion: PropTypes.string.isRequired,
  answerList: PropTypes.array.isRequired,
  questionId: PropTypes.number.isRequired,
};

export default AddQuestion;