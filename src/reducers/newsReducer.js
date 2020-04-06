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
        data: state.data.map((post, index) => {
          if (index === action.payload.id) {
            return {
              ...post,
              body: action.payload.body,
              title: action.payload.title,
            };
          } else return post;
        }),
      };
    case t.DELETE_POST:
      return {
        ...state,
        data: state.data.filter((el, index) => index !== action.payload),
      };
    default:
      return state;
  }
}

// Пробовал вместо индекса брать значение id. Приходило в формате строки, надо быть внимательным и юзать parseInt()
