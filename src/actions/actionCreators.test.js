import * as t from './actionTypes'
import { newsRequest, newsSuccess, newsFailure } from "./actionCreators";


describe('News action', () => {
    it('News Get request', () => {
        expect(newsRequest()).toEqual({
            type: t.NEWS_GET_REQUEST
        })
    });
    it('News Success response', () => {
        expect(newsSuccess('Test data')).toEqual({
            type: t.NEWS_GET_SUCCESS,
            payload: 'Test data'
        })
    });
    it('News Failure response', () => {
        expect(newsFailure('Some error')).toEqual({
            type: t.NEWS_GET_FAILURE,
            payload: { errorMsg : 'Some error' },
            error: true
        })
    })
});