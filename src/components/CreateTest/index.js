import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from 'containers/HeaderContainer';
import CreateQuestionContainer from 'containers/CreateQuestionContainer';
import ModalWindow from 'components/ModalWindow';
import DropDawn from 'components/DropDown';
import QuestionList from 'components/CreateTest/QuestionList';

import styles from './style.scss';

const CreateTest = ({
  questionList,
  deleteQuestionAction,
  editQuestionAction,
  history,
  nameTest,
  clearIntermediateValueTestAction,
  editIdTest,
  addInitialTwoAnswerAction,
  addInitialNumberAnswer,
  nextIdTest,
  isEditTest,
  setEditTestAction,
  dateCreate,
  addTestNameAction,
  postTestRequestAction,
  putTestRequestAction,
  deleteTestRequestAction,
}) => {
  const [typeQuestion, setTypeQuestion] = useState('');
  const [isCreatingQuestion, setCreatingQuestion] = useState(false);
  const [isModalWindow, setModalWindow] = useState(false);

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
    console.log(isEditTest, 'isEditTest');
    if (isEditTest === true) {
      console.log('edit');
      setEditTestAction(false);
      putTestRequestAction({
        id: editIdTest,
        nameTest,
        questionList,
        dateCreate,
      });
    } else {
      console.log('add');
      postTestRequestAction({
        id: nextIdTest,
        nameTest,
        questionList,
        dateCreate,
      });
    }
    clearIntermediateValueTestAction();
    history.push('/main/');
  };

  const handleChangeTestName = (e) => {
    const { value } = e.target;
    addTestNameAction(value);
  };

  const clickConfirm = () => {
    deleteTestRequestAction(editIdTest);
    clearIntermediateValueTestAction();
    history.push('/main/');
  };

  const handleDeleteTest = () => {
    setModalWindow(true);
  };

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
          (isCreatingQuestion)
          && (<CreateQuestionContainer
            typeQuestion={typeQuestion}
            isCreatingQuestion={isCreatingQuestion}
            setCreatingQuestion={setCreatingQuestion}
          />)
        }
        <QuestionList
          isCreatingQuestion={isCreatingQuestion}
          deleteQuestionAction={deleteQuestionAction}
          editQuestionAction={editQuestionAction}
          questionList={questionList}
        />
        <div className={styles.blockControlBtn}>
          <div className={styles.btnSave} onClick={handleSaveTest}>Сохранить</div>
          <div className={styles.btnDeleteTest} onClick={handleDeleteTest}>Удалить тест</div>
        </div>
      </div>
      {isModalWindow && <ModalWindow
        typeModalWindow="Подтверждение"
        title="Удаление теста"
        contentModalWindow={{ text: 'Вы уверены что хотите удалить тест?' }}
        setModalWindow={setModalWindow}
        clickConfirm={clickConfirm}
      />}
    </div>
  );
};

CreateTest.propTypes = {
  addTestNameAction: PropTypes.func.isRequired,
  addInitialTwoAnswerAction: PropTypes.func.isRequired,
  addInitialNumberAnswer: PropTypes.func.isRequired,
  questionList: PropTypes.array.isRequired,
  deleteQuestionAction: PropTypes.func.isRequired,
  editQuestionAction: PropTypes.func.isRequired,
  nameTest: PropTypes.string.isRequired,
  nextIdTest: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  clearIntermediateValueTestAction: PropTypes.func.isRequired,
  isEditTest: PropTypes.bool.isRequired,
  editIdTest: PropTypes.number.isRequired,
  setEditTestAction: PropTypes.func.isRequired,
  dateCreate: PropTypes.string.isRequired,
  postTestRequestAction: PropTypes.func.isRequired,
  putTestRequestAction: PropTypes.func.isRequired,
  deleteTestRequestAction: PropTypes.func.isRequired,
};

export default CreateTest;
