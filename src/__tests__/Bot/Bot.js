import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Bot from '../../components/Bot/Bot';

it('renders the message on the screen', () => {
  const wrapper = shallow(<Bot />);
  wrapper.instance().onSubmit('Message');
  expect(wrapper.html()).toContain('Message');
});

it.skip('WHAT TO DO?', () => {
  const wrapper = shallow(<Bot />);

})