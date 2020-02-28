import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderContainer from 'containers/HeaderContainer';
import Question from 'components/TakingTest/Question';
import styles from './style.scss';

class TakingTest extends Component {
  render() {
    const {
      itemTakingTest,
      history,
      changeCheckboxAnswerAction,
      changeRadioAnswerAction,
    } = this.props;
    const listTest = itemTakingTest.questionList.map(item => (
      <div key={item.id} className={styles.listItem}>
        <Question
          question={item}
          changeCheckboxAnswerAction={changeCheckboxAnswerAction}
          changeRadioAnswerAction={changeRadioAnswerAction}
        />
      </div>
    ));
    return (
      <div className={styles.page}>
        <HeaderContainer history={history} />
        <div className={styles.content}>
          <div className={styles.listTest}>
            <span>Здесь проходим тесты</span>
            {listTest}
          </div>
        </div>
      </div>
    );
  }
}

TakingTest.propTypes = {
  itemTakingTest: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  changeCheckboxAnswerAction: PropTypes.func.isRequired,
  changeRadioAnswerAction: PropTypes.func.isRequired,
};

export default TakingTest;
