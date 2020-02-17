import { combineReducers } from 'redux';

import first from './first';
import listTest from './listTest';
import intermediateValueTest from './intermediateValueTest';
import intermediateValueQuestion from './intermediateValueQuestion';

export default combineReducers({
  first,
  listTest,
  intermediateValueTest,
  intermediateValueQuestion,
});
