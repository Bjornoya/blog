import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Input />);
  });

  it('Should render an input', () => {
    const wrapper = component.find('input');
    expect(wrapper.length).toEqual(1);
  });
  it('Should change value', () => {
    const wrapper = component.find('input');
    wrapper.value = 'Test data';
    expect(wrapper.value).toEqual('Test data');
  });
});
