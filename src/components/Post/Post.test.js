import React from "react";
import { shallow } from "enzyme";
import Post from "./Post";

import { findByTestAttr, propTypesCheck } from "../../../testUtils";


describe('Post component', () => {

    describe('Should render', () => {
        const props = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            "image": "http://test.image.com"
        };

        const setUp = () => {
            const wrapper = shallow(<Post {...props} />);
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
            const wrapper = findByTestAttr(component, 'userId');
            expect(wrapper.text().includes('User ID 1')).toBe(true);
        });

        it('Should receive valid propTypes', () => {
            const result = propTypesCheck(component, props);
            expect(result).toEqual(undefined);
        })
    });

    describe('Should NOT render', () => {

        const setUp = () => {
            const wrapper = shallow(<Post />);
            return wrapper;
        };

        let component;
        beforeEach(() => {
            component = setUp()
        });

        it('Should NOT render a post if props not received', () => {
            const wrapper = findByTestAttr(component, 'post');
            expect(wrapper.length).toBe(0);
        });
    })
});