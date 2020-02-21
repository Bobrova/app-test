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
      changeIdEditQuestionAction,
      setEditQuestionAction,
    } = this.props;
    editQuestionAction(item);
    addQuestionAction();
    changeIdEditQuestionAction(item.id);
    setEditQuestionAction(true);
  }

  render() {
    const { item } = this.props;
    return (
      <>
        <div className={styles.questionName}>{item.textQuestion}</div>
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
  changeIdEditQuestionAction: PropTypes.func.isRequired,
  setEditQuestionAction: PropTypes.func.isRequired,
};

export default Question;
