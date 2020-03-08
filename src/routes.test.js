import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import NewsContainer from "./components/News/NewsContainer";
import NotFound from "./routes/NotFound/NotFound";
import About from "./routes/About/About";
import Routes from "./routes";


describe('Routes using MemoryRouter', () => {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
        news: {
            data: [
                { id: 1, userId: 60, title: "Principal Metrics Engineer", body: "auxiliary" },
                { id: 2, userId: 62, title: "Principal Bbbsd Engier", body: "hello world" },
            ]
        }
    });

    it('Should render NewsContainer for route "/"', () => {
        const component = mount(<MemoryRouter initialEntries = {['/']}>
            <Provider store={store}><Routes/></Provider>
        </MemoryRouter>);
        expect(component.find(NewsContainer)).toHaveLength(1);
    });

    it('Should render About page for route "/about"', () => {
        const component = mount(<MemoryRouter initialEntries = {['/about']}>
            <Provider store={store}><Routes/></Provider>
        </MemoryRouter>);
        expect(component.find(About)).toHaveLength(1);
    });

    it('Should render NotFound if wrong route', () => {
        const component = mount(<MemoryRouter initialEntries = {['/unknown']}>
            <Provider store={store}><Routes/></Provider>
        </MemoryRouter>);
        expect(component.find(NotFound)).toHaveLength(1);
    });
});