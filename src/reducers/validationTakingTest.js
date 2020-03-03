import {
  VALIDATION_BLANK_FIELD,
} from 'constants/ActionTypes';

const initialState = { listBlankFields: [] };

export default function userData(state = initialState, action) {
  switch (action.type) {
    case VALIDATION_BLANK_FIELD:
      return {
        listBlankFields: action.payload,
      };
    default:
      return state;
  }
}
