import React from "react";
import { shallow } from "enzyme";

import Icon from "./Icon";


describe('Icon component', () => {
    const component = shallow(<Icon icon="more_vert" />).childAt(0).dive();
    it('Should render if receive props', () => {
        const wrapper = component.find('i');
        expect(wrapper.length).toEqual(1);
    });
});