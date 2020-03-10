import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Answer from 'components/TakingTest/Question/Answer';
import styles from './style.scss';

class Question extends Component {
  render() {
    const {
      question,
      changeCheckboxAnswerAction,
      changeRadioAnswerAction,
      changeTextAnswerAction,
    } = this.props;

    const answerList = question.answerList.map(item => (
      <div key={item.id} className={styles.answerItem}>
        <Answer
          item={item}
          idQuestion={question.id}
          typeQuestion={question.typeQuestion}
          changeRadioAnswerAction={changeRadioAnswerAction}
          changeCheckboxAnswerAction={changeCheckboxAnswerAction}
          changeTextAnswerAction={changeTextAnswerAction}
        />
      </div>
    ));
    return (
      <>
        <div className={styles.question}>
          <p className={styles.textQuestion}>
            {question.textQuestion}
          </p>
        </div>
        <div className={styles.answerList}>
          {answerList}
        </div>
      </>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  changeCheckboxAnswerAction: PropTypes.func.isRequired,
  changeRadioAnswerAction: PropTypes.func.isRequired,
  changeTextAnswerAction: PropTypes.func.isRequired,
};

export default Question;
