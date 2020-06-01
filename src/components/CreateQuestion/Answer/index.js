import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

class Answer extends Component {
  handleChangeCheckbox = () => {
    const { changeCheckAction, item } = this.props;
    changeCheckAction(item.id);
  }

  handleChangeRadio = () => {
    const { changeRadioAction, item } = this.props;
    changeRadioAction(item.id);
  }

  handleChangeTextAnswer = (e) => {
    const { changeTextAnswerCreateAction, item } = this.props;
    const { value } = e.target;
    changeTextAnswerCreateAction(item.id, value);
  }

  render() {
    const { typeQuestion, item, answerClass } = this.props;
    const answerOneOfList = (
      <label className={styles.answerLabelRadio}>
        <input
          type="radio"
          className={styles.answerRadio}
          checked={item.check}
          onChange={this.handleChangeRadio}
        />
        <span className={styles.checkmarkRadio} />
        <input
          type="text"
          className={answerClass}
          value={item.textAnswer}
          onChange={this.handleChangeTextAnswer}
          placeholder="Текст ответа"
        />
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
        <input
          type="text"
          className={answerClass}
          value={item.textAnswer}
          onChange={this.handleChangeTextAnswer}
        />
      </label>
    );
    const answerNumerical = (
      <label className={styles.answerLabelCheckbox}>
        <input
          type="number"
          name="number"
          className={styles.answerNumberInput}
          value={item.textAnswer}
          onChange={this.handleChangeTextAnswer}
          autoComplete="off"
          placeholder="Ответ"
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
  typeQuestion: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  changeCheckAction: PropTypes.func.isRequired,
  changeRadioAction: PropTypes.func.isRequired,
  changeTextAnswerCreateAction: PropTypes.func.isRequired,
  answerClass: PropTypes.string.isRequired,
};

export default Answer;
