import * as t from './actionTypes';
import { API_ROOT } from "../utils";


export const newsRequest = () => ({
    type: t.NEWS_GET_REQUEST
});

export const newsSuccess = (data) => ({
    type: t.NEWS_GET_SUCCESS,
    payload: data
});

export const newsFailure = (error) => ({
    type: t.NEWS_GET_FAILURE,
    payload: error
});

export const addPost = (post) => ({
    type: t.ADD_POST,
    payload: {
        userId: 14,
        body: post.body,
        title: post.title,
    }
});

export const toggleTooltip = (index) => ({
    type: t.TOGGLE_TOOLTIP,
    payload: index
});

export const getNews = () => async (dispatch) => {
    dispatch(newsRequest());
    const response = await fetch(`${API_ROOT}/posts`);
    const myJson = await response.json();
    if (response.ok) {
        dispatch(newsSuccess(myJson))
    } else {
        dispatch(newsFailure(response.statusText))
    }
};