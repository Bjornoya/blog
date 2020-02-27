import * as t from './actionTypes';
import { checkResponse, httpGet } from "../utils";


export const newsRequest = () => ({
    type: t.NEWS_GET_REQUEST
});

export const newsSuccess = (data) => ({
    type: t.NEWS_GET_SUCCESS,
    payload: data
});

export const newsFailure = (errorMsg) => ({
    type: t.NEWS_GET_FAILURE,
    payload: {
        errorMsg
    },
    error: true
});

export const getNews = () => async (dispatch) => {
    dispatch(newsRequest());

    const response = await fetch('https://5e583c9911703300147ae9e1.mockapi.io/posts');
    const myJson = await response.json();
    if (response.ok) {
        dispatch(newsSuccess(myJson))
    } else {
        dispatch(newsFailure(response.status))
    }
};