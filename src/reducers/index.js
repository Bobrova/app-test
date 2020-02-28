import { combineReducers } from 'redux';

import common from './common';
import listTest from './listTest';
import intermediateValueTest from './intermediateValueTest';
import intermediateValueQuestion from './intermediateValueQuestion';
import takingTest from './takingTest';
import userData from './userData';
import rightAnswersList from './rightAnswersList';

export default combineReducers({
  common,
  listTest,
  intermediateValueTest,
  intermediateValueQuestion,
  takingTest,
  userData,
  rightAnswersList,
});
