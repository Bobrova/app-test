import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Question extends Component {
  handleChangeTextQuestion = (e) => {
    const { addTextQuestionAction } = this.props;
    const { value } = e.target;
    addTextQuestionAction(value);
  }

  render() {
    const { typeQuestion } = this.props;
    const questionOneOfList = (
      <div className={styles.addQuestion}>
        <p className={styles.typeQuestion}>{typeQuestion}</p>
        <textarea className={styles.questionText} placeholder="Текст вопроса" onChange={this.handleChangeTextQuestion} />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Варианты ответов:</p>
          <div className={styles.answerOptionsWrapper}>
            <label className={styles.answerLabelRadio}>
              <input
                type="radio"
                defaultChecked="checked"
                name="radio"
                className={styles.answerRadio}
              />
              <span className={styles.checkmarkRadio} />
              <input type="text" className={styles.answerText} />
            </label>
            <label className={styles.answerLabelRadio}>
              <input type="radio" name="radio" className={styles.answerRadio} />
              <span className={styles.checkmarkRadio} />
              <input type="text" className={styles.answerText} />
            </label>
            <label className={styles.answerLabelRadio}>
              <input type="radio" name="radio" className={styles.answerRadio} />
              <span className={styles.checkmarkRadio} />
              <input type="text" className={styles.answerText} />
            </label>
            <div className={styles.btnAddQuestion}>+</div>
            <div className={styles.blockSaveCancel}>
              <div className={styles.btnSave}>Сохранить</div>
              <div className={styles.btnCancel}>Отмена</div>
            </div>
          </div>
        </div>
      </div>
    );
    const qustionFewFromList = (
      <div className={styles.addQuestion}>
        <p className={styles.typeQuestion}>{typeQuestion}</p>
        <textarea className={styles.questionText} placeholder="Текст вопроса" onChange={this.handleChangeTextQuestion} />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Варианты ответов:</p>
          <div className={styles.answerOptionsWrapper}>
            <label className={styles.answerLabelCheckbox}>
              <input
                type="checkbox"
                defaultChecked="checked"
                name="checkbox"
                className={styles.answerCheckbox}
                onChange={this.handlaChangeTextAnswer}
              />
              <span className={styles.checkmarkCheckbox} />
              <input type="text" className={styles.answerText} />
            </label>
            <label className={styles.answerLabelCheckbox}>
              <input
                type="checkbox"
                name="checkbox"
                className={styles.answerCheckbox}
              />
              <span className={styles.checkmarkCheckbox} />
              <input type="text" className={styles.answerText} />
            </label>
            <label className={styles.answerLabelCheckbox}>
              <input
                type="checkbox"
                name="checkbox"
                className={styles.answerCheckbox}
              />
              <span className={styles.checkmarkCheckbox} />
              <input type="text" className={styles.answerText} />
            </label>
            <div className={styles.btnAddQuestion}>+</div>
            <div className={styles.blockSaveCancel}>
              <div className={styles.btnSave}>Сохранить</div>
              <div className={styles.btnCancel}>Отмена</div>
            </div>
          </div>
        </div>
      </div>
    );
    const qustionNumericalAnswer = (
      <div className={styles.addQuestion}>
        <p className={styles.typeQuestion}>{typeQuestion}</p>
        <textarea className={styles.questionText} placeholder="Текст вопроса" onChange={this.handleChangeTextQuestion} />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Ответ:</p>
          <div className={styles.answerOptionsWrapper}>
            <label className={styles.answerLabelCheckbox}>
              <input
                type="text"
                name="number"
                className={styles.answerNumber}
              />
            </label>
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
        {typeQuestion === 'Один из списка' && qustionFewFromList}
        {typeQuestion === 'Несколько из списка' && questionOneOfList}
        {typeQuestion === 'Численный ответ' && qustionNumericalAnswer}
      </>
    );
  }
}

Question.propTypes = {
  typeQuestion: PropTypes.string.isRequired,
  addTextQuestionAction: PropTypes.func.isRequired,
};

export default Question;
