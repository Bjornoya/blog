import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { API_ROOT } from './utils';

interface IData {
  id?: string;
  userId: number;
  title: string;
  body: string;
  image?: string;
}

interface IState {
  data: IData[],
  isLoading: boolean,
  error: null | string,
}

export const initialState: IState = {
  data: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    request: (state: IState) => {
      state.isLoading = true;
      state.error = null;
    },
    success: (state: IState, { payload }: PayloadAction<IData[]>) => {
      state.data = payload;
      state.isLoading = false;
    },
    failure: (state: IState, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = payload;
    },
    edit: (state: IState, { payload }: PayloadAction<{ id: number; body: string; title: string }>) => {
        state.data[payload.id].body = payload.body;
        state.data[payload.id].title = payload.title;
    },
    remove: (state: IState, { payload }) => {
        state.data.splice(payload, 1)
    },
    add: (state: IState, { payload }) => {
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
export const getNews = () => async (dispatch: Function) => {
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