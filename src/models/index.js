import commonReducer from './common/slice';
import intermediateValueQuestionReducer from './intermediateValueQuestion/slice';
import intermediateValueTestReducer from './intermediateValueTest/slice';
import takingTestReducer from './takingTest/slice';
import listTestReducer from './listTest/slice';
import userDateReducer from './userDate/slice';

// import usersSagas from './users/sagas';
// import memesSagas from './memes/sagas';
// import templatesSagas from './templates/sagas';
// import employeesSagas from './employees/sagas';
// import authorizationSagas from './authorization/sagas';

export const rootReducer = () => ({
  intermediateValueQuestion: intermediateValueQuestionReducer,
  intermediateValueTest: intermediateValueTestReducer,
  takingTest: takingTestReducer,
  listTest: listTestReducer,
  userDatezation: userDateReducer,
  common: commonReducer,
});

// export const rootSaga = function* rootSaga() {
//   yield all([
//     usersSagas(),
//     memesSagas(),
//     authorizationSagas(),
//     templatesSagas(),
//     employeesSagas(),
//   ]);
// };
