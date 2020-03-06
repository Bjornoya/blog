import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import { findByTestAttr } from "../../../testUtils";
import AddPost from "./AddPost";


describe('AddPost component', function () {
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({
        news: {
            data: [
                { id: 1, userId: 60, title: "Principal Metrics Engineer", body: "auxiliary" },
                { id: 2, userId: 62, title: "Principal Bbbsd Engier", body: "hello world" },
            ]
        }
    });
    const wrapper = mount(<Provider store={store}><AddPost /></Provider>);
    it("Should have a title field", () => {
        const input = findByTestAttr(wrapper, 'title');
        expect(input.length).toEqual(1);
    });
    it("Should have proper props for title field", () => {
        const input = findByTestAttr(wrapper, 'title');
        expect(input.props()).toEqual({
            value: undefined,
            name: 'title',
            type: 'text',
            onChange: expect.any(Function),
            'data-test': 'title'
        })
    });
    it("Should have a body field", () => {
        const textarea = wrapper.find('textarea');
        expect(textarea.length).toEqual(1);
    });
    it("Should have proper props for body field", () => {
        const textarea = wrapper.find('textarea');
        expect(textarea.props()).toEqual({
            value: undefined,
            name: 'body',
            onChange: expect.any(Function)
        })
    });
});