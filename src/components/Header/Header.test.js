import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";

describe('Header component', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Header />);
    });

    it('Should render without errors', () => {
       const wrapper = component.find(`[data-test='header']`);
       expect(wrapper.length).toBe(1);
    });
    it('Nav should render without errors', () => {
        const wrapper = component.find(`[data-test='nav']`);
        expect(wrapper.length).toBe(1);
    });
    it('Should have three menu items', () => {
        const wrapper = component.find(`[data-test='menuItem']`);
        expect(wrapper.length).toBe(3);
    });
});