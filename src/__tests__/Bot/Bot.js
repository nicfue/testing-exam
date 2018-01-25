import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Bot from '../../Components/Bot/Bot';

it('renders message on screen', () => {
  const wrapper = shallow(<Bot />);
  wrapper.instance().onSubmit('Message');
  expect(wrapper.html()).toContain('Message');
});
