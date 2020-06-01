import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  addInitialNumberAnswer,
  addInitialTwoAnswerAction,
  addInitialThreeAnswerAction,
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
  const [kindModal, setKindModal] = useState('');
  const [isTestName, setTestName] = useState(true);
  const [idQuestionEdit, setidEditQuestion] = useState(-1);

  const handleAddQuestionClick = () => {
    if (idQuestionEdit !== -1 || isCreatingQuestion) return;
    if (typeQuestion === '') return;
    setCreatingQuestion(true);
    if (typeQuestion === 'Численный ответ') {
      addInitialNumberAnswer();
    } else if (typeQuestion === 'Один из списка') {
      addInitialTwoAnswerAction();
    } else {
      addInitialThreeAnswerAction();
    }
  };

  const validationCreateTest = () => {
    if (nameTest === '') {
      setTestName(false);
      return false;
    }
    setTestName(true);
    if (!questionList.length) {
      return false;
    }
    return true;
  };

  const handleTestNameChange = (e) => {
    const { value } = e.target;
    addTestNameAction(value);
  };

  const deleteTestConfirm = () => {
    deleteTestRequestAction(editIdTest);
    clearIntermediateValueTestAction();
    history.push('/main/');
  };

  const saveTestConfirm = () => {
    if (isEditTest === true) {
      setEditTestAction(false);
      putTestRequestAction({
        id: editIdTest,
        nameTest,
        questionList,
        dateCreate,
      });
    } else {
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

  const handleDeleteTest = () => {
    if (idQuestionEdit !== -1 || isCreatingQuestion) return;
    setModalWindow(true);
    setKindModal('Delete');
  };

  const handleSaveTest = () => {
    if (idQuestionEdit !== -1 || isCreatingQuestion) return;
    if (!validationCreateTest()) return;
    setModalWindow(true);
    setKindModal('Save');
  };

  return (
    <div className={styles.page}>
      <HeaderContainer history={history} />
      <div className={styles.mainCreateTest}>
        <div className={styles.nameTest}>
          <label forhtml="nameTest" className={styles.labelNameTest}>
            <input
              type="text"
              className={classNames(styles.inputNameTest,
                { [styles.validationErrorTestName]: !isTestName })}
              autoComplete="off"
              name="nameTest"
              placeholder="Название теста"
              value={nameTest}
              onChange={handleTestNameChange}
            />
          </label>
        </div>
        <DropDawn
          isCreatingQuestion={isCreatingQuestion}
          typeQuestion={typeQuestion}
          idQuestionEdit={idQuestionEdit}
          setTypeQuestion={setTypeQuestion}
        />
        <div
          className={classNames(styles.btnAddQuestion, {
            [styles.disabled]: idQuestionEdit !== -1 || isCreatingQuestion,
          })}
          onClick={handleAddQuestionClick}
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
          setidEditQuestion={setidEditQuestion}
          idQuestionEdit={idQuestionEdit}
        />
        <div className={styles.blockControlBtn}>
          <div
            className={classNames(styles.btnSave, {
              [styles.disabled]: idQuestionEdit !== -1 || isCreatingQuestion,
            })}
            onClick={handleSaveTest}
          >
            Сохранить
          </div>
          <div
            className={classNames(styles.btnDeleteTest, {
              [styles.disabled]: idQuestionEdit !== -1 || isCreatingQuestion,
            })}
            onClick={handleDeleteTest}
          >
            Удалить тест
          </div>
        </div>
      </div>
      {isModalWindow && kindModal === 'Delete' && <ModalWindow
        typeModalWindow="Подтверждение"
        title="Удаление теста"
        contentModalWindow={{ text: 'Вы уверены что хотите удалить тест?' }}
        setModalWindow={setModalWindow}
        clickConfirm={deleteTestConfirm}
      />}
      {isModalWindow && kindModal === 'Save' && <ModalWindow
        typeModalWindow="Подтверждение"
        title="Сохранение теста"
        contentModalWindow={{ text: 'Сохранить тест?' }}
        setModalWindow={setModalWindow}
        clickConfirm={saveTestConfirm}
      />}
    </div>
  );
};

CreateTest.propTypes = {
  addTestNameAction: PropTypes.func.isRequired,
  addInitialTwoAnswerAction: PropTypes.func.isRequired,
  addInitialNumberAnswer: PropTypes.func.isRequired,
  addInitialThreeAnswerAction: PropTypes.func.isRequired,
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
