import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Answer from 'components/CreateQuestion/Answer';
import styles from './style.scss';

const CreateQuestion = ({
  typeQuestion,
  answerList,
  textQuestion,
  changeCheckAction,
  addAnswerAction,
  changeRadioAction,
  changeTextAnswerCreateAction,
  addTextQuestionAction,
  saveQuestionAction,
  nextIdQuestion,
  idQuestionEdit,
  clearIntermediateValueQuestionAction,
  nextIdAnswer,
  setCreatingQuestion,
  setidEditQuestion,
  updateAnswerListAction,
}) => {
  const [validationBlankFilds, setValidationBlankFilds] = useState([]);
  const [isTextQuestion, setTextQuestion] = useState(true);
  const validationQuestion = () => {
    if (textQuestion === '') {
      setTextQuestion(false);
      return false;
    }
    setTextQuestion(true);
    return true;
  };

  const validationAnswer = () => {
    let isAnswer = false;
    let isTextAnswer = false;
    let counterRightAnswers = 0;
    const arrayBlankFields = [];
    switch (typeQuestion) {
      case 'Численный ответ':
        for (let i = 0; i < answerList.length; i += 1) {
          isTextAnswer = !(answerList[i].textAnswer === '');
        }
        isAnswer = isTextAnswer;
        break;
      case 'Несколько из списка':
        for (let i = 0; i < answerList.length; i += 1) {
          if (answerList[i].check) counterRightAnswers += 1;
          if (counterRightAnswers > 1) {
            isAnswer = true;
          }
          isTextAnswer = !(answerList[i].textAnswer === '');
          if (isTextAnswer === false) arrayBlankFields.push(answerList[i].id);
        }
        break;
      case 'Один из списка':
        for (let i = 0; i < answerList.length; i += 1) {
          if (answerList[i].check) {
            isAnswer = true;
          }
          isTextAnswer = !(answerList[i].textAnswer === '');
          if (isTextAnswer === false) arrayBlankFields.push(answerList[i].id);
        }
        break;
      default: break;
    }
    if (isAnswer && isTextAnswer) {
      setValidationBlankFilds([]);
      return true;
    }
    setValidationBlankFilds(arrayBlankFields);
    return false;
  };

  const handleTextQuestionChange = (e) => {
    const { value } = e.target;
    addTextQuestionAction(value);
  };

  const handleAddAnswerClick = () => {
    addAnswerAction(nextIdAnswer);
  };

  const handleCloseQuestionClick = () => {
    clearIntermediateValueQuestionAction();
    if (idQuestionEdit !== -1) {
      setidEditQuestion(-1);
    } else {
      setCreatingQuestion(false);
    }
  };

  const handleSaveQuestionClick = () => {
    if (!(validationQuestion()) || !(validationAnswer())) return;
    saveQuestionAction({
      id: idQuestionEdit === -1 ? nextIdQuestion : idQuestionEdit,
      textQuestion,
      answerList,
      typeQuestion,
    });
    if (idQuestionEdit !== -1) {
      setidEditQuestion(-1);
    } else {
      setCreatingQuestion(false);
    }
    clearIntermediateValueQuestionAction();
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = result => {
    if (!result.destination) return;

    const items = reorder(
      answerList,
      result.source.index,
      result.destination.index,
    );
    updateAnswerListAction(items);
  };

  const answers = answerList.map((item, index) => {
    const validationError = validationBlankFilds.includes(item.id, 0);
    const answerClass = classNames(
      styles.answerText,
      { [styles.validationErrorAnswerText]: validationError },
    );
    return (
      <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
        {provided => (
          <div
            key={item.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Answer
              item={item}
              typeQuestion={typeQuestion}
              changeCheckAction={changeCheckAction}
              key={item.id}
              addAnswerAction={addAnswerAction}
              changeRadioAction={changeRadioAction}
              changeTextAnswerCreateAction={changeTextAnswerCreateAction}
              answerClass={answerClass}
            />
          </div>
        )}
      </Draggable>);
  });
  const questionClass = classNames(
    styles.questionText,
    { [styles.validationErrorTextQuestion]: !isTextQuestion },
  );
  return (
    <div className={styles.addQuestion}>
      <p className={styles.typeQuestion}>{typeQuestion}</p>
      <textarea
        className={questionClass}
        placeholder="Текст вопроса"
        onChange={handleTextQuestionChange}
        value={textQuestion}
      />
      <div className={styles.answerOptions}>
        {typeQuestion === 'Численный ответ'
          ? <p className={styles.answerOptionsTitle}>Ответ:</p>
          : <p className={styles.answerOptionsTitle}>Варианты ответов:</p>}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {provided => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={styles.answerOptionsWrapper}
              >
                {answers}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        {typeQuestion !== 'Численный ответ' && <div className={styles.btnAddAnswer} onClick={handleAddAnswerClick}>&#43;</div>}
        <div className={styles.blockSaveCancel}>
          <div className={styles.btnSave} onClick={handleSaveQuestionClick}>Сохранить</div>
          <div className={styles.btnCancel} onClick={handleCloseQuestionClick}>Отмена</div>
        </div>
      </div>
    </div>
  );
};

CreateQuestion.propTypes = {
  typeQuestion: PropTypes.string.isRequired,
  addTextQuestionAction: PropTypes.func.isRequired,
  addAnswerAction: PropTypes.func.isRequired,
  changeCheckAction: PropTypes.func.isRequired,
  changeRadioAction: PropTypes.func.isRequired,
  nextIdAnswer: PropTypes.number.isRequired,
  setCreatingQuestion: PropTypes.func,
  changeTextAnswerCreateAction: PropTypes.func.isRequired,
  saveQuestionAction: PropTypes.func.isRequired,
  textQuestion: PropTypes.string.isRequired,
  answerList: PropTypes.array.isRequired,
  nextIdQuestion: PropTypes.number.isRequired,
  idQuestionEdit: PropTypes.number,
  setidEditQuestion: PropTypes.func,
  updateAnswerListAction: PropTypes.func.isRequired,
  clearIntermediateValueQuestionAction: PropTypes.func.isRequired,
};

CreateQuestion.defaultProps = {
  idQuestionEdit: -1,
  setidEditQuestion: null,
  setCreatingQuestion: null,
};

export default CreateQuestion;
