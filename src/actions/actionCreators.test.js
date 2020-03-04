import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as t from './actionTypes'
import { newsRequest, newsSuccess, newsFailure, getNews, addPost } from "./actionCreators";
import { API_ROOT } from "../utils";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('News action', () => {

    describe('Sync Actions', () => {
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
                payload: 'Some error',
            })
        });
        it('Adding post to payload', () => {
            expect(addPost({title: 'Hello', body: 'Body text'})).toEqual({
                type: t.ADD_POST,
                payload: {
                    userId: 14,
                    title: 'Hello',
                    body: 'Body text'
                },
            })
        });
    });

    describe('Async Actions', () => {
        afterEach(() => {
            fetchMock.reset();
            fetchMock.restore();
        });

        it('Creates NEWS_GET_SUCCESS after fetching', () => {
            fetchMock.getOnce(`${API_ROOT}/posts`, {
                body: [1, 2, 3],
                status: 200,
                headers: { 'content-type': 'application/json' },
            });

            const expectedActions = [newsRequest(), newsSuccess([1, 2, 3])];
            const store = mockStore({});

            return store.dispatch(getNews()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('Creates NEWS_GET_FAILURE if received bad response', () => {
            fetchMock.getOnce(`${API_ROOT}/posts`, {
                body: ["Not Found"],
                status: 404,
                headers: { 'content-type': 'application/json' },
            });

            const expectedActions = [newsRequest(), newsFailure("Not Found")];
            const store = mockStore({});

            return store.dispatch(getNews()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
        // TODO: `Ошибка была в том, что я забыл передать в expectedActions в newsFailure строку с ошибкой.
        //  Для того чтоб словить ошибку, не надо трогать url, можно указать status в теле response.
        //  Не забывай afterEach fetchMock.restore()`
    })
});