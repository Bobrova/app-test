import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  DELETE_TEST_REQUEST,
  DELETE_TEST_SUCCESS,
  POST_TEST_REQUEST,
  POST_TEST_SUCCESS,
  PUT_TEST_REQUEST,
  PUT_TEST_SUCCESS,
} from 'constants/ActionTypes';

const initialState = {
  list: [],
};

export default function listTest(state = initialState.list, action) {
  switch (action.type) {
    case GET_LIST_REQUEST: {
      return state;
    }
    case GET_LIST_SUCCESS: {
      return action.payload.data;
    }

    case DELETE_TEST_REQUEST: {
      return state;
    }
    case DELETE_TEST_SUCCESS: {
      return state.filter(item => item.id !== action.payload);
    }

    case POST_TEST_REQUEST: {
      return state;
    }

    case POST_TEST_SUCCESS: {
      return [...state, action.payload];
    }

    case PUT_TEST_REQUEST: {
      return state;
    }

    case PUT_TEST_SUCCESS: {
      return state.map(item => item.id === action.payload.id
        ? action.payload
        : item);
    }
    default:
      return state;
  }
}
