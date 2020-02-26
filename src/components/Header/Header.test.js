import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";
import { findByTestAttr } from "../../../testUtils";

describe('Header component', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Header />);
    });

    it('Should render without errors', () => {
       const wrapper = findByTestAttr(component, 'header');
       expect(wrapper.length).toBe(1);
    });
    it('Should render a navigation', () => {
        const wrapper = findByTestAttr(component, 'nav');
        expect(wrapper.length).toBe(1);
    });
    it('Should render three menu items', () => {
        const wrapper = findByTestAttr(component, 'menuItem');
        expect(wrapper.length).toBe(3);
    });
});