import * as t from './actionTypes';
import { checkResponse, httpGet } from "../../utils";


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

export const getNews = () => (dispatch) => {
    dispatch(newsRequest());

    return httpGet('posts')
        .then(res => {
            if (checkResponse(res)) {
                dispatch(newsSuccess(res.data))
            } else {
                dispatch(newsFailure(res.message))
            }
        })
        .catch(error => {
            dispatch(newsFailure())
        })
};