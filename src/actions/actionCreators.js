import * as t from './actionTypes';


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