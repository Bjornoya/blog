import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import AddPost from './AddPost';

describe('AddPost component', function () {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({
    news: {
      data: [
        { id: 1, userId: 60, title: 'Principal Metrics Engineer', body: 'auxiliary' },
        { id: 2, userId: 62, title: 'Principal Bbbsd Engier', body: 'hello world' },
      ],
    },
  });
  const wrapper = mount(
    <Provider store={store}>
      <AddPost />
    </Provider>
  );
  it('Should have proper props for title field', () => {
    const input = wrapper.find('input');
    expect(input.props()).toEqual({
      value: '',
      name: 'title',
      type: 'text',
      onChange: expect.any(Function),
      autoComplete: 'off',
      className: 'input',
    });
  });
  it('Should have a body field', () => {
    const textarea = wrapper.find('textarea');
    expect(textarea.length).toEqual(1);
  });
  it('Should have proper props for body field', () => {
    const textarea = wrapper.find('textarea');
    expect(textarea.props()).toEqual({
      value: '',
      name: 'body',
      onChange: expect.any(Function),
      autoComplete: 'off',
      rows: '7',
      className: 'textarea',
      children: ' ',
    });
  });

  describe('Changing value in title', () => {
    const input = wrapper.find('input');
    beforeEach(() => {
      input.simulate('change', {
        target: { name: 'title', value: 'test' },
      });
    });

    it('Should change input props', () => {
      const inputValue = wrapper.find('input');
      expect(inputValue.props().value).toBe('test');
    });
  });

  describe('Changing value in textarea', () => {
    const input = wrapper.find('textarea');
    beforeEach(() => {
      input.simulate('change', {
        target: { name: 'title', value: 'test' },
      });
    });

    it('Should change textarea props', () => {
      const inputValue = wrapper.find('input');
      expect(inputValue.props().value).toBe('test');
    });
  });
});

// TODO: `https://github.com/enzymejs/enzyme/issues/1999
//        Не понятно как тестировать смену стейта в форме.
//        Пока что, на сколько я понял, норм практика - писать в beforeEach логику .simulate()
//        Если обращаться к этой же переменной из beforeEach, то стейт почему-то не обновляется,
//        поэтому в it нужно создавать по сути ту же переменную, только с другим именем, напр: inputValue`
