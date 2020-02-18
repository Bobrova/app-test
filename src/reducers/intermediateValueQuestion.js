import {
  ADD_TEXT_QUESTION,
  ADD_TEXT_ANSWER,
  ADD_INITIAL_TWO_ANSWER,
  ADD_INITIAL_NUMBER_ANSWER,
  CHANGE_CHECK,
  ADD_ANSWER,
  CHANGE_RADIO,
} from 'constants/ActionTypes';

const initialState = { answerList: [{}] };

export default function first(state = initialState, action) {
  switch (action.type) {
    case ADD_INITIAL_TWO_ANSWER:
      return { ...state, answerList: [{ id: 0, textAnswer: '', check: true }, { id: 1, textAnswer: '', check: false }] };
    case ADD_INITIAL_NUMBER_ANSWER:
      return { ...state, answerList: [{ id: 0, textAnswer: '', check: false }] };
    case ADD_TEXT_QUESTION:
      return { ...state, textQuestion: action.payload };
    case ADD_TEXT_ANSWER:
      return { ...state, textAnswer: [...state.textAnswer, action.payload] };
    case ADD_ANSWER:
      return { ...state, answerList: [...state.answerList, { id: action.payload, textAnswer: '', check: false }] };
    case CHANGE_CHECK:
      return {
        ...state,
        answerList:
          state.answerList.map(item => item.id === action.id
            ? {
              ...item,
              check: !item.check,
            }
            : item),
      };
    case CHANGE_RADIO:
      return {
        ...state,
        answerList:
          state.answerList.map(item => item.id === action.id
            ? {
              ...item,
              check: true,
            }
            : {
              ...item,
              check: false,
            }),
      };
    default:
      return state;
  }
}
