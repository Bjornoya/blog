import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";

describe('Header component', () => {
    it('Should render without errors', () => {
       const component = shallow(<Header />);
       const wrapper = component.find('header');
       expect(wrapper.length).toBe(1);
    });
});