import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Question from 'components/Question';
import styles from './style.scss';

class CreateTest extends Component {
  handleClickAddQuestion = () => {
    const { addQuestionAction } = this.props;
    addQuestionAction();
  }

  render() {
    const { addingQuestion } = this.props;
    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.mainCreateTest}>
          <div className={styles.nameTest}>
            <label forhtml="nameTest" className={styles.labelNameTest}>
              Название теста
              <input type="text" className={styles.inputNameTest} name="nameTest" placeholder="Название теста" />
            </label>
          </div>
          <div className={styles.dropDown}>
            <div className={styles.dropDown_label}>Тип вопроса</div>
            <div className={styles.dropDown_content}>
              <div className={styles.type}>Один из списка</div>
              <div className={styles.type}>Несколько из списка</div>
              <div className={styles.type}>Численный ответ</div>
            </div>
          </div>
          <div
            className={styles.btnAddQuestion}
            onClick={this.handleClickAddQuestion}
          >
            Добавить вопрос
          </div>
          {addingQuestion && <Question /> }
          <div className={styles.questionList}>
            <div className={styles.listItem}>
              <p className={styles.questionName}>Name</p>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
              <div className={`${styles.btnDelete} ${styles.btn}`}>Удалить</div>
            </div>
            <div className={styles.listItem}>
              <p className={styles.questionName}>Name</p>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
              <div className={`${styles.btnDelete} ${styles.btn}`}>Удалить</div>
            </div>
            <div className={styles.listItem}>
              <p className={styles.questionName}>Name</p>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
              <div className={`${styles.btnDelete} ${styles.btn}`}>Удалить</div>
            </div>
            <div className={styles.listItem}>
              <p className={styles.questionName}>Name</p>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
              <div className={`${styles.btnDelete} ${styles.btn}`}>Удалить</div>
            </div>
            <div className={styles.listItem}>
              <p className={styles.questionName}>Name</p>
              <div className={`${styles.btnEdit} ${styles.btn}`}>Редактировать</div>
              <div className={`${styles.btnDelete} ${styles.btn}`}>Удалить</div>
            </div>
          </div>
          <div className={styles.blockSaveCancel}>
            <div className={styles.btnSave}>Сохранить</div>
            <div className={styles.btnCancel}>Отмена</div>
          </div>
        </div>
      </div>
    );
  }
}

CreateTest.propTypes = {
  addingQuestion: PropTypes.bool.isRequired,
  addQuestionAction: PropTypes.func.isRequired,
};

export default CreateTest;
