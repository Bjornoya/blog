import { configureStore, createSlice } from '@reduxjs/toolkit';
import { API_ROOT } from './utils';

export const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    request: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    success: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    failure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    edit: (state, { payload }) => {
        state.data[payload.id].body = payload.body;
        state.data[payload.id].title = payload.title;
    },
    remove: (state, { payload }) => {
        state.data.splice(payload, 1)
    },
    add: (state, { payload }) => {
      state.data.push({
        userId: payload.userId,
        body: payload.body,
        title: payload.title,
      })
    }
  }
});

export const {
  request: newsRequest,
  success: newsSuccess,
  failure: newsFailure,
  edit: editPost,
  remove: deletePost,
  add: addPost,
} = newsSlice.actions;

// Async action
export const getNews = () => async (dispatch) => {
  dispatch(newsRequest());
  const response = await fetch(`${API_ROOT}/posts`);
  const myJson = await response.json();
  if (response.ok) {
    dispatch(newsSuccess(myJson));
  } else {
    dispatch(newsFailure(response.statusText));
  }
};

const reducer = {
  news: newsSlice.reducer,
};

export const store = configureStore({
  reducer,
});

// TODO: `Если добавить новый пост и потом попробовать его отредактировать,
//  то вылетает ошибка. Разобраться`