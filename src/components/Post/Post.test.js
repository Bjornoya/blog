import React from "react";
import {mount, shallow} from "enzyme";
import Post from "./Post";

import { findByTestAttr, propTypesCheck } from "../../../testUtils";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import NewsContainer from "../News/NewsContainer";


describe('Post component', () => {

    describe('Should render', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore({
            news: {
                data: [
                    { id: 1, userId: 60, title: "Principal Metrics Engineer", body: "auxiliary" },
                    { id: 2, userId: 62, title: "Principal Bbbsd Engier", body: "hello world" },
                ]
            }
        });

        const setUp = () => {
            const wrapper = mount(<Router>
                <Provider store={store}><NewsContainer /></Provider>
            </Router>);
            return wrapper;
        };

        let component;
        beforeEach(() => {
            component = setUp()
        });

        it('Should render a post if have props', () => {
            const wrapper = findByTestAttr(component, 'post');
            expect(wrapper.length).toBe(1);
        });

        it('Should render correct userId', () => {
            const wrapper = findByTestAttr(component, 'userId').first();
            expect(wrapper.text().includes('User ID 62')).toBe(true);
        });

        // it('Should receive valid propTypes', () => {
        //     const result = propTypesCheck(component, props);
        //     expect(result).toEqual(undefined);
        // })
    });

    // describe('Should NOT render', () => {
    //
    //     const setUp = () => {
    //         const wrapper = shallow(<Post />);
    //         return wrapper;
    //     };
    //
    //     let component;
    //     beforeEach(() => {
    //         component = setUp()
    //     });
    //
    //     it('Should NOT render a post if props not received', () => {
    //         const wrapper = findByTestAttr(component, 'post');
    //         expect(wrapper.length).toBe(0);
    //     });
    // })
});