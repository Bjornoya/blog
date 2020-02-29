import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as t from './actionTypes'
import { newsRequest, newsSuccess, newsFailure, getNews } from "./actionCreators";
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
    });

    describe('Async Actions', () => {
        afterEach(() => {
            fetchMock.reset();
            fetchMock.restore();
        });

        it('Creates NEWS_GET_SUCCESS after fetching', () => {
            fetchMock.getOnce(`${API_ROOT}/posts`, {
                body: [1, 2, 3],
                headers: { 'content-type': 'application/json' },
            });

            const expectedActions = [newsRequest(), newsSuccess([1, 2, 3])];
            const store = mockStore({});

            return store.dispatch(getNews()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        // it('Creates NEWS_GET_FAILURE if received bad response', () => {
        //     fetchMock.getOnce(`${API_ROOT}/posts`, {
        //         errorMsg: 'Page not found',
        //         headers: { 'content-type': 'application/json' },
        //         // body: {},
        //     });
        //
        //     const expectedActions = [newsRequest(), newsFailure()];
        //     const store = mockStore({});
        //
        //     return store.dispatch(getNews()).then(() => {
        //         expect(store.getActions()).toEqual(expectedActions);
        //     });
        // });
        // TODO: `Не понятно как делать тесты асинхронных функций на неудачный исход.
        //  После того как приходит объект response и я преобразую его через метод .json()
        //  у него не получается достучаться до response.status например`
    })
});