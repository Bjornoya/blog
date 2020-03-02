import React from "react";
import { shallow } from "enzyme";
import About from "./About";


describe('About page', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<About />)
    });
    it('Renders 5 paragraphs', () => {
        const component = wrapper.find('p');
        expect(component).toHaveLength(5);
    })
    it('Have image', () => {
        const component = wrapper.find('img');
        expect(component).toHaveLength(1);
    })
});