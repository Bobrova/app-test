import {
  VALIDATION_BLANK_FIELD,
  VALIDATION_TEXT_QUESTION,
  VALIDATION_QUESTION_ANSWERS,
} from 'constants/ActionTypes';

const initialState = {
  listBlankFields: [],
  isTextQuestion: true,
  isAnswer: true,
};

export default function validation(state = initialState, action) {
  switch (action.type) {
    case VALIDATION_BLANK_FIELD:
      return {
        ...state,
        listBlankFields: action.payload,
      };
    case VALIDATION_TEXT_QUESTION:
      return {
        ...state,
        isTextQuestion: action.payload,
      };
    case VALIDATION_QUESTION_ANSWERS:
      return {
        ...state,
        listBlankFields: action.payload.blankFields,
        isAnswer: action.payload.isAnswer,
      };
    default:
      return state;
  }
}
