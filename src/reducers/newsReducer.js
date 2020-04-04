import * as t from '../actions/actionTypes';

export const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case t.NEWS_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case t.NEWS_GET_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case t.NEWS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case t.ADD_POST:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case t.EDIT_POST:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.payload.id),
          {
            ...state.data[action.payload.id],
            body: action.payload.body,
            title: action.payload.title,
          },
          ...state.data.slice(action.payload.id + 1),
        ],
      };
    case t.DELETE_POST:
      return {
        ...state,
        data: [...state.data.slice(0, action.payload), ...state.data.slice(action.payload + 1)],
      };
    default:
      return state;
  }
}
