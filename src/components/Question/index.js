import React, { Component } from 'react';
import styles from './style.scss';

class Question extends Component {
  render() {
    return (
      <div className={styles.addQuestion}>
        <textarea className={styles.questionText} placeholder="Текст вопроса" />
        <div className={styles.answerOptions}>
          <p className={styles.answerOptionsTitle}>Варианты ответов:</p>
          <div className={styles.answerOptionsWrapper}>
            <label className={styles.answerLabel}>
              <input type="radio" defaultChecked="checked" name="radio" className={styles.answerRadio} />
              <span className={styles.checkmark} />
              <input type="text" className={styles.answerText} />
            </label>
            <label className={styles.answerLabel}>
              <input type="radio" name="radio" className={styles.answerRadio} />
              <span className={styles.checkmark} />
              <input type="text" className={styles.answerText} />
            </label>
            <label className={styles.answerLabel}>
              <input type="radio" name="radio" className={styles.answerRadio} />
              <span className={styles.checkmark} />
              <input type="text" className={styles.answerText} />
            </label>
            <div className={styles.btnAddQuestion}>+</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Question;
