import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderContainer from 'containers/HeaderContainer';
import Question from 'components/TakingTest/Question';
import ModalWindow from 'components/ModalWindow';
import Footer from 'components/Footer';
import styles from './style.scss';

const TakingTest = ({
  takingTest,
  history,
  changeCheckboxAnswerAction,
  changeRadioAnswerAction,
  changeTextAnswerAction,
  showModalWindowAction,
  isModalWindow,
  rightAnswersList,
}) => {
  const [resultTest, setResultTest] = useState(0);
  const [validationBlankFilds, setValidationBlankFilds] = useState([]);
  const validationTest = testAnswer => {
    const arrayBlankFields = [];
    for (let i = 0; i < testAnswer.length; i += 1) {
      let counterRightAnswers = 0;
      let isBlankField = false;
      switch (testAnswer[i].typeQuestion) {
        case 'Численный ответ':
          isBlankField = testAnswer[i].answer.includes('', 0);
          break;
        case 'Несколько из списка':
          for (let j = 0; j < testAnswer[i].answer.length; j += 1) {
            if (testAnswer[i].answer[j]) counterRightAnswers += 1;
            if (counterRightAnswers > 1) {
              isBlankField = false;
            } else {
              isBlankField = true;
            }
          }
          break;
        case 'Один из списка':
          isBlankField = !(testAnswer[i].answer.includes(true, 0));
          break;
        default: break;
      }
      if (isBlankField) arrayBlankFields.push(testAnswer[i].id);
    }
    let result = false;
    if (arrayBlankFields.length === 0) {
      result = true;
    } else {
      setValidationBlankFilds(arrayBlankFields);
      result = false;
    }
    return result;
  };

  const testCheck = (takingTestAnswer) => {
    let numberCorrectQuestion = 0;
    console.log(rightAnswersList, 'rightAnswersList');
    const arrayWrongQuestions = [];
    for (let i = 0; i < takingTestAnswer.length; i += 1) {
      let numberCorrectAnswers = 0;
      for (let j = 0; j < takingTestAnswer[i].answer.length; j += 1) {
        console.log(i, j);
        if (takingTestAnswer[i].answer[j] === rightAnswersList[i].answer[j]) {
          numberCorrectAnswers += 1;
        }
      }
      if (numberCorrectAnswers === takingTestAnswer[i].answer.length) {
        numberCorrectQuestion += 1;
      } else {
        arrayWrongQuestions.push(takingTestAnswer[i].id);
      }
    }
    return numberCorrectQuestion;
  };

  const handleClickTestCheck = () => {
    const takingTestAnswer = takingTest.questionList.map(itemQuestion => ({
      answer: itemQuestion.answerList.map(itemAnswer => itemQuestion.typeQuestion === 'Численный ответ'
        ? itemAnswer.textAnswer
        : itemAnswer.check),
      id: itemQuestion.id,
      typeQuestion: itemQuestion.typeQuestion,
    }));
    if (!(validationTest(takingTestAnswer))) {
      return;
    }
    console.log(takingTestAnswer);
    setResultTest(testCheck(takingTestAnswer));
    showModalWindowAction(true);
  };

  const handleClickConfirm = () => {
    history.push('/main');
  };

  const test = takingTest.questionList.map(item => {
    const validationError = validationBlankFilds.includes(item.id, 0);
    const questionClass = classNames(
      styles.listItem,
      { [styles.validationError]: validationError },
    );
    return (
      <div key={item.id} className={questionClass}>
        <Question
          question={item}
          changeCheckboxAnswerAction={changeCheckboxAnswerAction}
          changeRadioAnswerAction={changeRadioAnswerAction}
          changeTextAnswerAction={changeTextAnswerAction}
        />
      </div>
    );
  });
  return (
    <div className={styles.page}>
      <HeaderContainer history={history} />
      <div className={styles.content}>
        <div className={styles.test}>
          {test}
        </div>
        <div className={styles.btnTestCheck} onClick={handleClickTestCheck}>Закончить</div>
      </div>
      {isModalWindow && <ModalWindow
        title="Результаты теста"
        contentModalWindow={{ text: resultTest }}
        clickConfirm={handleClickConfirm}
        typeModalWindow="Результаты"
        showModalWindowAction={showModalWindowAction}
      />}
      <Footer />
    </div>
  );
};

TakingTest.propTypes = {
  takingTest: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  changeCheckboxAnswerAction: PropTypes.func.isRequired,
  changeRadioAnswerAction: PropTypes.func.isRequired,
  changeTextAnswerAction: PropTypes.func.isRequired,
  rightAnswersList: PropTypes.array.isRequired,
  showModalWindowAction: PropTypes.func.isRequired,
  isModalWindow: PropTypes.bool.isRequired,
};

export default TakingTest;
