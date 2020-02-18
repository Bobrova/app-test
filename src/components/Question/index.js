import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from 'components/Answer';
import styles from './style.scss';

class Question extends Component {
  handleChangeTextQuestion = (e) => {
    const { addTextQuestionAction } = this.props;
    const { value } = e.target;
    addTextQuestionAction(value);
  }

  handleClickAddAnswer = () => {
    const { addAnswerAction, currentId } = this.props;
    addAnswerAction(currentId);
  }

  render() {
    const {
      typeQuestion,
      listAnswer,
      changeCheckAction,
      addAnswerAction,
      changeRadioAction,
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
            <div className={styles.btnAddQuestion} onClick={this.handleClickAddAnswer}>+</div>
            <div className={styles.blockSaveCancel}>
              <div className={styles.btnSave}>Сохранить</div>
              <div className={styles.btnCancel}>Отмена</div>
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
              <div className={styles.btnSave}>Сохранить</div>
              <div className={styles.btnCancel}>Отмена</div>
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
              <div className={styles.btnSave}>Сохранить</div>
              <div className={styles.btnCancel}>Отмена</div>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <>
        {typeQuestion === 'Несколько из списка' && questionFewFromList}
        {typeQuestion === 'Один из списка' && questionOneOfList}
        {typeQuestion === 'Численный ответ' && questionNumericalAnswer}
      </>
    );
  }
}

Question.propTypes = {
  typeQuestion: PropTypes.string.isRequired,
  addTextQuestionAction: PropTypes.func.isRequired,
  addAnswerAction: PropTypes.func.isRequired,
  listAnswer: PropTypes.array.isRequired,
  changeCheckAction: PropTypes.func.isRequired,
  changeRadioAction: PropTypes.func.isRequired,
  currentId: PropTypes.number.isRequired,
};

export default Question;
