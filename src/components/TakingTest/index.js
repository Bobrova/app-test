import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HeaderContainer from 'containers/HeaderContainer';
import Question from 'components/TakingTest/Question';
import ModalWindow from 'components/ModalWindow';
import Footer from 'components/Footer';
import styles from './style.scss';

class TakingTest extends Component {
  validationTest = testAnswer => {
    const { validationBlankFieldsAction } = this.props;
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
      validationBlankFieldsAction(arrayBlankFields);
      result = false;
    }
    return result;
  }

  testCheck = (takingTestAnswer) => {
    const { rightAnswersList } = this.props;
    let numberCorrectQuestion = 0;
    const arrayWrongQuestions = [];
    for (let i = 0; i < takingTestAnswer.length; i += 1) {
      let numberCorrectAnswers = 0;
      for (let j = 0; j < takingTestAnswer[i].answer.length; j += 1) {
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
  }

  handleClickTestCheck = () => {
    const {
      takingTest,
      addResultModalAction,
      changeTypeModalWindowAction,
      showModalWindowAction,
    } = this.props;
    const takingTestAnswer = takingTest.questionList.map(itemQuestion => ({
      answer: itemQuestion.answerList.map(itemAnswer => itemQuestion.typeQuestion === 'Численный ответ'
        ? itemAnswer.textAnswer
        : itemAnswer.check),
      id: itemQuestion.id,
      typeQuestion: itemQuestion.typeQuestion,
    }));
    if (!(this.validationTest(takingTestAnswer))) {
      return;
    }
    const result = this.testCheck(takingTestAnswer);
    addResultModalAction(result);
    changeTypeModalWindowAction('Результаты');
    showModalWindowAction(true);
  }

  handleClickConfirm = () => {
    const { history, changeTypeModalWindowAction } = this.props;
    changeTypeModalWindowAction('');
    history.push('/main');
  }

  render() {
    const {
      takingTest,
      history,
      changeCheckboxAnswerAction,
      changeRadioAnswerAction,
      changeTextAnswerAction,
      numberCorrectQuestion,
      typeModalWindow,
      showModalWindowAction,
      listBlankFields,
      isModalWindow,
    } = this.props;
    const test = takingTest.questionList.map(item => {
      const validationError = listBlankFields.includes(item.id, 0);
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
          <div className={styles.btnTestCheck} onClick={this.handleClickTestCheck}>Закончить</div>
        </div>
        {isModalWindow && <ModalWindow
          title="Результаты теста"
          contentModalWindow={{ text: numberCorrectQuestion }}
          clickConfirm={this.handleClickConfirm}
          typeModalWindow={typeModalWindow}
          showModalWindowAction={showModalWindowAction}
        />}
        <Footer />
      </div>
    );
  }
}

TakingTest.propTypes = {
  takingTest: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  changeCheckboxAnswerAction: PropTypes.func.isRequired,
  changeRadioAnswerAction: PropTypes.func.isRequired,
  changeTextAnswerAction: PropTypes.func.isRequired,
  rightAnswersList: PropTypes.array.isRequired,
  addResultModalAction: PropTypes.func.isRequired,
  numberCorrectQuestion: PropTypes.number.isRequired,
  changeTypeModalWindowAction: PropTypes.func.isRequired,
  showModalWindowAction: PropTypes.func.isRequired,
  typeModalWindow: PropTypes.string.isRequired,
  validationBlankFieldsAction: PropTypes.func.isRequired,
  listBlankFields: PropTypes.array.isRequired,
  isModalWindow: PropTypes.bool.isRequired,
};

export default TakingTest;
