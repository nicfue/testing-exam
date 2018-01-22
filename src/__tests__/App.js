import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import fakePosts from '..//fakePosts';

it('should render <App /> without user', () => {
  const wrapper = shallow(<App />);
  const user = wrapper.state().currentPersona;
  expect(user).toBe('');
});

it('should render <App /> with user', () => {
  const wrapper = shallow(<App />);
  const persona = 'Nisse';
  wrapper.setState({'currentPersona': persona});
  const user = wrapper.state().currentPersona;
  expect(user).toBe('Nisse');
});
