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

  handleChoiceOneOfList = () => {
    const { changeTypeQuestionAction } = this.props;
    changeTypeQuestionAction('Один из списка');
  }

  handleChoiceFewFromList = () => {
    const { changeTypeQuestionAction } = this.props;
    changeTypeQuestionAction('Несколько из списка');
  }

  handleChoiceNumericalAnswer = () => {
    const { changeTypeQuestionAction } = this.props;
    changeTypeQuestionAction('Численный ответ');
  }

  handleSaveTest = () => {
    const { addTestAction } = this.props;
    addTestAction({ name: 'hhh', id: 1 });
  }

  handleChangeTestName = (e) => {
    const { addTestNameAction } = this.props;
    const { value } = e.target;
    addTestNameAction(value);
  }

  render() {
    const {
      addingQuestion,
      typeQuestion,
      addTextQuestionAction,
      addTextAnswerAction,
    } = this.props;
    return (
      <div className={styles.page}>
        <Header />
        <div className={styles.mainCreateTest}>
          <div className={styles.nameTest}>
            <label forhtml="nameTest" className={styles.labelNameTest}>
              Название теста
              <input type="text" className={styles.inputNameTest} name="nameTest" placeholder="Название теста" onChange={this.handleChangeTestName} />
            </label>
          </div>
          <div className={styles.dropDown}>
            {
            typeQuestion !== '' ? (
              <div className={styles.dropDown_label}>{typeQuestion}</div>
            ) : (
              <div className={styles.dropDown_label}>Выберете тип вопроса</div>
            )
            }
            <div className={styles.dropDown_content}>
              <div
                className={styles.type}
                onClick={this.handleChoiceOneOfList}
              >
                Один из списка
              </div>
              <div
                className={styles.type}
                onClick={this.handleChoiceFewFromList}
              >
                Несколько из списка
              </div>
              <div
                className={styles.type}
                onClick={this.handleChoiceNumericalAnswer}
              >
                Численный ответ
              </div>
            </div>
          </div>
          <div
            className={styles.btnAddQuestion}
            onClick={this.handleClickAddQuestion}
          >
            Добавить вопрос
          </div>
          {
            addingQuestion && (
              <Question
                typeQuestion={typeQuestion}
                addTextQuestionAction={addTextQuestionAction}
                addTextAnswerAction={addTextAnswerAction}
              />
            )
          }
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
          <div className={styles.blockControlBtn}>
            <div className={styles.blockSaveCancel}>
              <div className={styles.btnSave} onClick={this.handleSaveTest}>Сохранить</div>
              <div className={styles.btnCancel}>Отмена</div>
            </div>
            <div className={styles.btnDeleteTest}>Удалить тест</div>
          </div>
        </div>
      </div>
    );
  }
}

CreateTest.propTypes = {
  addingQuestion: PropTypes.bool.isRequired,
  addQuestionAction: PropTypes.func.isRequired,
  typeQuestion: PropTypes.string.isRequired,
  changeTypeQuestionAction: PropTypes.func.isRequired,
  addTestAction: PropTypes.func.isRequired,
  addTestNameAction: PropTypes.func.isRequired,
  addTextQuestionAction: PropTypes.func.isRequired,
  addTextAnswerAction: PropTypes.func.isRequired,
};

export default CreateTest;
