import * as t from '../actions/actionTypes';
import newsReducer, { initialState } from './newsReducer';

describe('News Reducer', () => {
  it('NEWS_GET_REQUEST', () => {
    const action = {
      type: t.NEWS_GET_REQUEST,
    };
    expect(newsReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('NEWS_GET_SUCCESS', () => {
    const action = {
      type: t.NEWS_GET_SUCCESS,
      payload: [1, 2, 3],
    };
    const prevState = {
      ...initialState,
      isLoading: true,
    };
    expect(newsReducer(prevState, action)).toEqual({
      ...prevState,
      isLoading: false,
      data: action.payload,
    });
  });

  it('NEWS_GET_FAILURE', () => {
    const action = {
      type: t.NEWS_GET_FAILURE,
      payload: '500 server error',
    };
    const prevState = {
      ...initialState,
      isLoading: true,
    };
    expect(newsReducer(prevState, action)).toEqual({
      ...prevState,
      isLoading: false,
      error: action.payload,
    });
  });

  it('NEWS_GET_REQUEST After Failure', () => {
    const action = {
      type: t.NEWS_GET_REQUEST,
    };
    const prevState = {
      ...initialState,
      error: '500 server error',
    };
    expect(newsReducer(prevState, action)).toEqual({
      ...prevState,
      isLoading: true,
      error: null,
    });
  });

  it('ADD_POST adding post to news in redux store', () => {
    const action = {
      type: t.ADD_POST,
      payload: {
        userId: 14,
        title: 'Hello title',
        body: 'Body text',
      },
    };
    expect(newsReducer(initialState, action)).toEqual({
      ...initialState,
      data: [
        {
          userId: 14,
          title: 'Hello title',
          body: 'Body text',
        },
      ],
    });
  });
});
