import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

import { findByTestAttr, propTypesCheck } from "../../../testUtils";

jest.mock('react-redux');

describe('Button component', () => {

    describe('Should render', () => {
        const props = {children: "Button data", num: 1};
        const setUp = () => {
            const wrapper = shallow(<Button {...props} />);
            return wrapper;
        };
        let component;

        beforeEach(() => {
            component = setUp();
        });

        it('Should render if have props', () => {
            const result = findByTestAttr(component, 'button');
            expect(result.length).toBe(1);
        });

        it('Should have correct propTypes', () => {
            let result = propTypesCheck(Button, props);
            expect(result).toEqual(undefined);
        });
    });

    describe('Should NOT render', () => {
        const setUp = () => {
            const wrapper = shallow(<Button />);
            return wrapper;
        };
        let component;

        beforeEach(() => {
            component = setUp();
        });

        it('Should NOT render if props not received', () => {
            const result = findByTestAttr(component, 'button');
            expect(result.length).toBe(0);
        })
    })
});