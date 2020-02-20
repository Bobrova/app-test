import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

class Question extends Component {
  handleClickDeleteQuestion = () => {
    const { deleteQuestionAction, item } = this.props;
    deleteQuestionAction(item.id);
  }

  handleClickEditQuestion = () => {
    const {
      editQuestionAction,
      addQuestionAction,
      item,
      changeIdEditQuestion,
      setEditQuestion,
    } = this.props;
    editQuestionAction(item);
    addQuestionAction();
    changeIdEditQuestion(item.id);
    setEditQuestion(true);
  }

  render() {
    const { item } = this.props;
    return (
      <>
        <p className={styles.questionName}>{item.textQuestion}</p>
        <div className={styles.btn} onClick={this.handleClickEditQuestion}>Редактировать</div>
        <div className={styles.btn} onClick={this.handleClickDeleteQuestion}>Удалить</div>
      </>
    );
  }
}

Question.propTypes = {
  item: PropTypes.object.isRequired,
  deleteQuestionAction: PropTypes.func.isRequired,
  editQuestionAction: PropTypes.func.isRequired,
  addQuestionAction: PropTypes.func.isRequired,
  changeIdEditQuestion: PropTypes.func.isRequired,
  setEditQuestion: PropTypes.func.isRequired,
};

export default Question;
