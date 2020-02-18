import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Answer extends Component {
  handleChangeCheckbox = () => {
    const { changeCheckAction, item } = this.props;
    changeCheckAction(item.id);
  }

  handleChangeRadio = (e) => {
    const { changeRadioAction, item } = this.props;
    console.log(e.currentTarget.value);
    changeRadioAction(item.id);
  }

  render() {
    const { typeQuestion, item } = this.props;
    const answerOneOfList = (
      <label className={styles.answerLabelRadio}>
        <input
          type="radio"
          className={styles.answerRadio}
          checked={item.check}
          onChange={this.handleChangeRadio}
        />
        <span className={styles.checkmarkRadio} />
        <input type="text" className={styles.answerText} value={item.text} />
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
        <input type="text" className={styles.answerText} />
      </label>
    );
    const answerNumerical = (
      <label className={styles.answerLabelCheckbox}>
        <input
          type="text"
          name="number"
          className={styles.answerNumber}
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
};

export default Answer;
