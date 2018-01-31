import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Message from '../../components/Bot/Message';

it('should render message', () => {
  const fakeMessage = 'Hejhopp!'
  const wrapper = mount(<Message bot={false}  message={fakeMessage} />);
  expect(wrapper.find('p').text()).toBe(fakeMessage);
});
