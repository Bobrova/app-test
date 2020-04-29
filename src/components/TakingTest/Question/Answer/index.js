import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Answer extends Component {
  handleChangeCheckbox = () => {
    const { changeCheckboxAnswerAction, item, idQuestion } = this.props;
    changeCheckboxAnswerAction({ idQuestion, idAnswer: item.id });
  }

  handleChangeRadio = () => {
    const { changeRadioAnswerAction, item, idQuestion } = this.props;
    changeRadioAnswerAction({ idQuestion, idAnswer: item.id });
  }

  handleChangeTextAnswer = e => {
    const { changeTextAnswerAction, item, idQuestion } = this.props;
    const { value } = e.target;
    changeTextAnswerAction({ idAnswer: item.id, text: value, idQuestion });
  }

  render() {
    const { item, typeQuestion } = this.props;
    const answerOneOfList = (
      <label className={styles.answerLabelRadio}>
        <input
          type="radio"
          className={styles.answerRadio}
          checked={item.check}
          onChange={this.handleChangeRadio}
        />
        <span className={styles.checkmarkRadio} />
        <p className={styles.answerText}>{item.textAnswer}</p>
      </label>
    );
    const answerFewFromList = (
      <label className={styles.answerLabelCheckbox}>
        <input
          type="checkbox"
          className={styles.answerCheckbox}
          checked={item.check}
          onChange={this.handleChangeCheckbox}
        />
        <span className={styles.checkmarkCheckbox} />
        <p className={styles.answerText}>{item.textAnswer}</p>
      </label>
    );
    const answerNumerical = (
      <label className={styles.answerLabelNumberAnswer}>
        Ответ:
        <input
          type="number"
          name="number"
          className={styles.answerNumber}
          onChange={this.handleChangeTextAnswer}
        />
      </label>
    );
    return (
      <>
        {typeQuestion === 'Один из списка' && answerOneOfList}
        {typeQuestion === 'Несколько из списка' && answerFewFromList}
        {typeQuestion === 'Численный ответ' && answerNumerical}
      </>
    );
  }
}

Answer.propTypes = {
  item: PropTypes.object.isRequired,
  typeQuestion: PropTypes.string.isRequired,
  changeCheckboxAnswerAction: PropTypes.func.isRequired,
  changeRadioAnswerAction: PropTypes.func.isRequired,
  idQuestion: PropTypes.number.isRequired,
  changeTextAnswerAction: PropTypes.func.isRequired,
};

export default Answer;
