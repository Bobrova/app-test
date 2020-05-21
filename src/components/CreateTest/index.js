import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from 'containers/HeaderContainer';
import CreateQuestionContainer from 'containers/CreateQuestionContainer';
import Question from 'components/CreateTest/Question';
import ModalWindow from 'components/ModalWindow';
import DropDawn from 'components/DropDown';
import Footer from 'components/Footer';
import styles from './style.scss';

const CreateTest = ({
  questionList,
  deleteQuestionAction,
  editQuestionAction,
  // changeIdEditQuestionAction,
  setEditQuestionAction,
  history,
  nameTest,
  isModalWindow,
  showModalWindowAction,
  isEditQuestion,
  // editIdQuestion,
  clearIntermediateValueTestAction,
  deleteTestAction,
  editIdTest,
  changeTypeQuestionAction,
  addInitialTwoAnswerAction,
  addInitialNumberAnswer,
  saveTestAction,
  nextIdTest,
  isEditTest,
  setEditTestAction,
  clearTypeQuestionAction,
  dateCreate,
  addTestNameAction,
}) => {
  const [typeQuestion, setTypeQuestion] = useState('');
  const [isCreatingQuestion, setCreatingQuestion] = useState(false);
  const [idQuestionEdit, setidEditQuestion] = useState(-1);

  const handleClickAddQuestion = () => {
    if (typeQuestion === '') return;
    setCreatingQuestion(true);
    if (typeQuestion !== 'Численный ответ') {
      addInitialTwoAnswerAction();
    } else {
      addInitialNumberAnswer();
    }
  };

  const validationCreateTest = () => {
    if (nameTest === '') {
      return false;
    }
    if (!questionList.length) {
      return false;
    }
    return true;
  };

  const handleSaveTest = () => {
    if (!validationCreateTest()) return;
    saveTestAction({
      id: isEditTest === false ? nextIdTest : editIdTest,
      nameTest,
      questionList,
      dateCreate,
    });
    if (isEditTest === true) setEditTestAction(false);
    clearIntermediateValueTestAction();
    clearTypeQuestionAction();
    history.push('/main/');
  };

  const handleChangeTestName = (e) => {
    const { value } = e.target;
    addTestNameAction(value);
  };

  const clickConfirm = () => {
    deleteTestAction(editIdTest);
    clearIntermediateValueTestAction();
    history.push('/main/');
  };

  const handleDeleteTest = () => {
    showModalWindowAction(true);
  };

  const questions = questionList.map(item => (
    <div key={item.id} className={styles.listItem}>
      {idQuestionEdit === item.id && isEditQuestion ? (
        <CreateQuestionContainer
          idQuestionEdit={idQuestionEdit}
          setidEditQuestion={setidEditQuestion}
          setCreatingQuestion={setCreatingQuestion}
        />
      ) : (
        <Question
          item={item}
          deleteQuestionAction={deleteQuestionAction}
          editQuestionAction={editQuestionAction}
          setCreatingQuestion={setCreatingQuestion}
          setidEditQuestion={setidEditQuestion}
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
            <input
              type="text"
              className={styles.inputNameTest}
              autoComplete="off"
              name="nameTest"
              placeholder="Название теста"
              value={nameTest}
              onChange={handleChangeTestName}
            />
          </label>
        </div>
        <DropDawn
          changeTypeQuestionAction={changeTypeQuestionAction}
          isCreatingQuestion={isCreatingQuestion}
          typeQuestion={typeQuestion}
          setTypeQuestion={setTypeQuestion}
        />
        <div
          className={styles.btnAddQuestion}
          onClick={handleClickAddQuestion}
        >
          Добавить вопрос
        </div>
        {
          (isCreatingQuestion && !isEditQuestion)
          && (<CreateQuestionContainer
            typeQuestion={typeQuestion}
            isCreatingQuestion={isCreatingQuestion}
            setCreatingQuestion={setCreatingQuestion}
          />)
        }
        <div className={styles.questionList}>
          {
          (isEmptyQuestionList && !isCreatingQuestion)
            ? <div className={styles.emptyList}>Добавьте вопросы</div>
            : questions
          }
        </div>
        <div className={styles.blockControlBtn}>
          <div className={styles.btnSave} onClick={handleSaveTest}>Сохранить</div>
          <div className={styles.btnDeleteTest} onClick={handleDeleteTest}>Удалить тест</div>
        </div>
      </div>
      <Footer />
      {isModalWindow && <ModalWindow
        typeModalWindow="Подтверждение"
        title="Удаление теста"
        contentModalWindow={{ text: 'Вы уверены что хотите удалить тест?' }}
        showModalWindowAction={showModalWindowAction}
        clickConfirm={clickConfirm}
      />}
    </div>
  );
};

CreateTest.propTypes = {
  changeTypeQuestionAction: PropTypes.func.isRequired,
  saveTestAction: PropTypes.func.isRequired,
  addTestNameAction: PropTypes.func.isRequired,
  addInitialTwoAnswerAction: PropTypes.func.isRequired,
  addInitialNumberAnswer: PropTypes.func.isRequired,
  questionList: PropTypes.array.isRequired,
  deleteQuestionAction: PropTypes.func.isRequired,
  editQuestionAction: PropTypes.func.isRequired,
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
  clearTypeQuestionAction: PropTypes.func.isRequired,
  dateCreate: PropTypes.string.isRequired,
};

export default CreateTest;
