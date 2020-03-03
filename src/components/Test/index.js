import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Test extends Component {
  handleClickEditTest = () => {
    const {
      editTestAction,
      item,
      history,
      changeIdEditTestAction,
      setEditTestAction,
    } = this.props;
    editTestAction(item);
    changeIdEditTestAction(item.id);
    setEditTestAction(true);
    history.push('/main/create-test');
  }

  handleClickTest = () => {
    const {
      item,
      history,
      changeTakingTest,
      addRightAnswer,
    } = this.props;
    const listWithoutAnswer = {
      ...item,
      questionList:
        item.questionList.map(item => ({
          ...item,
          answerList: item.answerList.map(item => ({ ...item, check: false })),
        })),
    };
    changeTakingTest(listWithoutAnswer);
    const rightAnswer = item.questionList.map(itemQuestion => ({
      answer: itemQuestion.answerList.map(itemAnswer => (itemQuestion.typeQuestion === 'Численный ответ' ? itemAnswer.textAnswer : itemAnswer.check)),
      id: itemQuestion.id,
      typeQuestion: itemQuestion.typeQuestion,
    }));
    addRightAnswer(rightAnswer);
    history.push(`/main/test-${item.id}`);
  }

  render() {
    const { item, isAdmin } = this.props;
    return (
      <div className={styles.listItem}>
        <div className={styles.startTest} onClick={this.handleClickTest}>{item.nameTest}</div>
        {isAdmin && <div className={`${styles.btnEdit} ${styles.btn}`} onClick={this.handleClickEditTest}>Редактировать</div>}
      </div>
    );
  }
}

Test.propTypes = {
  item: PropTypes.object.isRequired,
  editTestAction: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  changeIdEditTestAction: PropTypes.func.isRequired,
  setEditTestAction: PropTypes.func.isRequired,
  changeTakingTest: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  addRightAnswer: PropTypes.func.isRequired,
};

export default Test;
