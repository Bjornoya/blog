import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';
import { findByTestAttr, propTypesCheck } from '../../../testUtils';

describe('Modal component', () => {
  describe('Should render', () => {
    const onClick = jest.fn();
    let component;
    const props = {
      isOpen: true,
      title: 'Add post',
      onClick: onClick,
    };
    beforeEach(() => {
      component = shallow(<Modal {...props} />);
    });
    it('Should render correct title', () => {
      const wrapper = findByTestAttr(component, 'modal-title');
      expect(wrapper.props().children).toEqual('Add post');
    });
    it('Should have correct propTypes', () => {
      let result = propTypesCheck(Modal, props);
      expect(result).toEqual(undefined);
    });
  });

  describe('Should NOT render', () => {
    let component;
    const props = {
      isOpen: false,
    };
    beforeEach(() => {
      component = shallow(<Modal {...props} />);
    });
    it('Should NOT render if isOpen is false', () => {
      expect(component.html()).toEqual(null);
    });
  });
});
