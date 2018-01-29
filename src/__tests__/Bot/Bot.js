import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Bot from '../../components/Bot/Bot';

it('renders the message on the screen', () => {
  const wrapper = shallow(<Bot />);
  wrapper.instance().onSubmit('Message');
  expect(wrapper.html()).toContain('Message');
});

it('set message as state on submit',() => {
  const wrapper = shallow(<Bot />);
  wrapper.instance().onSubmit('Message');
  expect(wrapper.state().messages[0]).toEqual({message: 'Message', bot:false});
  expect(wrapper.state().messages).toHaveLength(1);
});