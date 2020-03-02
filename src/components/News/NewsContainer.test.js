import React from "react";
import { mount } from "enzyme";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store'
import NewsContainer from "./NewsContainer";
import * as redux from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


describe('App component', () => {
    const spy = jest.spyOn(redux, 'useDispatch'); // Mocking useDispatch

    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
        news: {
            data: [
                { id: 1, userId: 60, title: "Principal Metrics Engineer", body: "auxiliary" },
                { id: 2, userId: 62, title: "Principal Bbbsd Engier", body: "hello world" },
            ]
        }
    });
    const wrapper = mount(<Router>
        <Provider store={store}><NewsContainer /></Provider>
    </Router>); // Обернул в роутер для того чтобы при использовании NavLink не было ошибки

    it('UseEffect "ComponentDidMount" works correctly. Called once', () => {
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
