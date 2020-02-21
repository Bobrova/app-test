import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import CreateQuestionContainer from 'containers/CreateQuestionContainer';
import Question from 'components/Question';
import styles from './style.scss';

class CreateTest extends Component {
  handleClickAddQuestion = () => {
    const {
      addQuestionAction,
      addInitialTwoAnswerAction,
      typeQuestion,
      addInitialNumberAnswer,
    } = this.props;
    if (typeQuestion === '') return;
    addQuestionAction();
    if (typeQuestion !== 'Численный ответ') {
      addInitialTwoAnswerAction();
    } else {
      addInitialNumberAnswer();
    }
  };

  handleChoiceOneOfList = () => {
    const { changeTypeQuestionAction, addingQuestion } = this.props;
    if (!addingQuestion) changeTypeQuestionAction('Один из списка');
  }

  handleChoiceFewFromList = () => {
    const { changeTypeQuestionAction, addingQuestion } = this.props;
    if (!addingQuestion) changeTypeQuestionAction('Несколько из списка');
  }

  handleChoiceNumericalAnswer = () => {
    const { changeTypeQuestionAction, addingQuestion } = this.props;
    if (!addingQuestion) changeTypeQuestionAction('Численный ответ');
  }

  handleSaveTest = () => {
    const {
      saveTestAction,
      nameTest,
      questionList,
      nextIdTest,
      history,
    } = this.props;
    saveTestAction({ id: nextIdTest, nameTest, questionList });
    history.push('/main/');
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
      questionList,
      deleteQuestionAction,
      editQuestionAction,
      addQuestionAction,
      changeIdEditQuestionAction,
      setEditQuestionAction,
      history,
    } = this.props;
    console.log(history);
    const questions = questionList.map(item => (
      <div key={item.id} className={styles.listItem}>
        <Question
          item={item}
          deleteQuestionAction={deleteQuestionAction}
          editQuestionAction={editQuestionAction}
          addQuestionAction={addQuestionAction}
          changeIdEditQuestionAction={changeIdEditQuestionAction}
          setEditQuestionAction={setEditQuestionAction}
        />
      </div>
    ));

    return (
      <div className={styles.page}>
        <Header history={history} />
        <div className={styles.mainCreateTest}>
          <div className={styles.nameTest}>
            <label forhtml="nameTest" className={styles.labelNameTest}>
              Название теста
              <input
                type="text"
                className={styles.inputNameTest}
                name="nameTest"
                placeholder="Название теста"
                onChange={this.handleChangeTestName}
              />
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
              <CreateQuestionContainer />
            )
          }
          <div className={styles.questionList}>
            {questions}
            <div className={styles.listItem}>
              <p className={styles.questionName}>Name</p>
              <div className={styles.btn}>Редактировать</div>
              <div className={styles.btn}>Удалить</div>
            </div>
            <div className={styles.listItem}>
              <p className={styles.questionName}>Name</p>
              <div className={styles.btn}>Редактировать</div>
              <div className={styles.btn}>Удалить</div>
            </div>
            <div className={styles.listItem}>
              <p className={styles.questionName}>Name</p>
              <div className={styles.btn}>Редактировать</div>
              <div className={styles.btn}>Удалить</div>
            </div>
          </div>
          <div className={styles.blockControlBtn}>
            <div className={styles.blockSaveCancel}>
              <div className={styles.btnSave} onClick={this.handleSaveTest}>Сохранить</div>
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
  saveTestAction: PropTypes.func.isRequired,
  addTestNameAction: PropTypes.func.isRequired,
  addInitialTwoAnswerAction: PropTypes.func.isRequired,
  addInitialNumberAnswer: PropTypes.func.isRequired,
  questionList: PropTypes.array.isRequired,
  deleteQuestionAction: PropTypes.func.isRequired,
  editQuestionAction: PropTypes.func.isRequired,
  changeIdEditQuestionAction: PropTypes.func.isRequired,
  setEditQuestionAction: PropTypes.func.isRequired,
  nameTest: PropTypes.string.isRequired,
  nextIdTest: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
};

export default CreateTest;
