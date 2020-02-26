import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from 'containers/HeaderContainer';
import CreateQuestionContainer from 'containers/CreateQuestionContainer';
import Question from 'components/Question';
import ModalWindow from 'components/ModalWindow';
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
      clearIntermediateValueTestAction,
      isEditTest,
      editIdTest,
      setEditTestAction,
      clearTypeQuestionAction,
    } = this.props;
    saveTestAction({
      id: isEditTest === false ? nextIdTest : editIdTest,
      nameTest,
      questionList,
    });
    if (isEditTest === true) setEditTestAction(false);
    clearIntermediateValueTestAction();
    clearTypeQuestionAction();
    history.push('/main/');
  }

  handleChangeTestName = (e) => {
    const { addTestNameAction } = this.props;
    const { value } = e.target;
    addTestNameAction(value);
  }

  clickConfirm = () => {
    const {
      clearIntermediateValueTestAction,
      deleteTestAction,
      history,
      editIdTest,
    } = this.props;
    deleteTestAction(editIdTest);
    clearIntermediateValueTestAction();
    history.push('/main/');
  }

  handleDeleteTest = () => {
    const {
      showModalWindowAction,
    } = this.props;
    showModalWindowAction(true);
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
      nameTest,
      isModalWindow,
      showModalWindowAction,
      isEditQuestion,
      editIdQuestion,
    } = this.props;
    const questions = questionList.map(item => (
      <div key={item.id} className={styles.listItem}>
        {editIdQuestion === item.id && isEditQuestion ? (
          <CreateQuestionContainer />
        ) : (
          <Question
            item={item}
            deleteQuestionAction={deleteQuestionAction}
            editQuestionAction={editQuestionAction}
            addQuestionAction={addQuestionAction}
            changeIdEditQuestionAction={changeIdEditQuestionAction}
            setEditQuestionAction={setEditQuestionAction}
          />
        )}
      </div>
    ));
    const isEmptyQuestionList = questions.length === 0;

    return (
      <div className={styles.page}>
        <HeaderContainer history={history} />
        <div className={styles.mainCreateTest}>
          <div className={styles.nameTest}>
            <label forhtml="nameTest" className={styles.labelNameTest}>
              Название теста
              <input
                type="text"
                className={styles.inputNameTest}
                name="nameTest"
                placeholder="Название теста"
                value={nameTest}
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
            (addingQuestion && !isEditQuestion) && (<CreateQuestionContainer />)
          }
          <div className={styles.questionList}>
            {isEmptyQuestionList ? <div className={styles.emptyList}>Ничего нет</div> : questions}
          </div>
          <div className={styles.blockControlBtn}>
            <div className={styles.blockSaveCancel}>
              <div className={styles.btnSave} onClick={this.handleSaveTest}>Сохранить</div>
            </div>
            <div className={styles.btnDeleteTest} onClick={this.handleDeleteTest}>Удалить тест</div>
            {isModalWindow && <ModalWindow
              contentModalWindow="Тест будет удален!!! Вы уверены что вы в трезвом уме и с чистой памятью?"
              showModalWindowAction={showModalWindowAction}
              clickConfirm={this.clickConfirm}
            />}
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
  clearIntermediateValueTestAction: PropTypes.func.isRequired,
  isEditTest: PropTypes.bool.isRequired,
  editIdTest: PropTypes.number.isRequired,
  setEditTestAction: PropTypes.func.isRequired,
  showModalWindowAction: PropTypes.func.isRequired,
  isModalWindow: PropTypes.bool.isRequired,
  deleteTestAction: PropTypes.func.isRequired,
  isEditQuestion: PropTypes.bool.isRequired,
  editIdQuestion: PropTypes.number.isRequired,
  clearTypeQuestionAction: PropTypes.func.isRequired,
};

export default CreateTest;
