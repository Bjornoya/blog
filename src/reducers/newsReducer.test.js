import * as t from '../actions/actionTypes';
import newsReducer, { initialState } from "./newsReducer";


describe('News Reducer', () => {

    it('NEWS_GET_REQUEST', () => {
        const action = {
            type: t.NEWS_GET_REQUEST
        };
        expect(newsReducer(initialState, action)).toEqual({
            ...initialState,
            isLoading: true
        });
    });

    it('NEWS_GET_SUCCESS', () => {
        const action = {
            type: t.NEWS_GET_SUCCESS,
            payload: 'Payload data...'
        };
        const prevState = {
            ...initialState,
            isLoading: true
        };
        expect(newsReducer(prevState, action)).toEqual({
            ...prevState,
            isLoading: false,
            data: action.payload
        })
    });

    it('NEWS_GET_FAILURE', () => {
        const action = {
            type: t.NEWS_GET_FAILURE,
            payload: { errorMsg: '500 server error' },
        };
        const prevState = {
            ...initialState,
            isLoading: true
        };
        expect(newsReducer(prevState, action)).toEqual({
            ...prevState,
            isLoading: false,
            error: action.payload.errorMsg,
        })
    })
});