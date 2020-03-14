import React from "react";
import { shallow } from "enzyme";
import News from "./News";
import Post from "../Post/Post";

import { findByTestAttr, propTypesCheck } from "../../../testUtils";



describe('News component', () => {
    describe('Should render', () => {
        const expectedProps = {data: [{
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }, {
                userId: 2,
                id: 2,
                title: "excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur rem eveniet architecto"
            }]};

        const setUp = () => {
            const wrapper = shallow(<News {...expectedProps} />);
            return wrapper;
        };

        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'news');
            expect(wrapper.length).toBe(1);

        });

        it('Should render two posts if two news received', () => {
            const wrapper = component.find(Post);
            expect(wrapper.length).toBe(2);

        });

        it('Should have valid props', () => {
            const wrapper = propTypesCheck(component, expectedProps);
            expect(wrapper).toEqual(undefined);
        });
    });

    describe('Should NOT render', () => {
        const setUp = () => {
            const wrapper = shallow(<News />);
            return wrapper;
        };

        let component;
        beforeEach(() => {
            component = setUp();
        });

        it('Should NOT render a news component if props not received', () => {
            const wrapper = findByTestAttr(component, 'news');
            expect(wrapper.length).toBe(0);
        })
    });
});

// TODO: `Нужно ли тестить метод reverse()? КАК ?`