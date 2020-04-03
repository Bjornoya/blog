import React from 'react';
import { shallow } from 'enzyme';
import TextArea from './TextArea';

describe('TextArea component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<TextArea />);
  });

  it('Should render a textarea', () => {
    const wrapper = component.find('textarea');
    expect(wrapper.length).toEqual(1);
  });
  it('Should change value', () => {
    const wrapper = component.find('textarea');
    wrapper.value = 'Test data';
    expect(wrapper.value).toEqual('Test data');
  });
});
