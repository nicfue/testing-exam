import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import fakePosts from '..//fakePosts';

it('should render <App /> without user', () => {
  const wrapper = shallow(<App />);
  const user = wrapper.state().currentPersona;
  expect(user).toBe('');
});

it('Render <App /> with user', () => {
  const wrapper = shallow(<App />);
  const persona = 'Nisse';
  wrapper.setState({'currentPersona': persona});
  const user = wrapper.state().currentPersona;
  expect(user).toBe('Nisse');
});

it('Render App default page', () => {
  const wrapper = shallow(<App />); 
  const { currentPage } = wrapper.state();
  expect(currentPage).toBe('home');
});

it('Change page from home to bot', () => {
  const wrapper = mount(<App />);
  const { currentPage:defaultPage} = wrapper.state();
  expect(defaultPage).toBe('home');
  wrapper.instance(defaultPage).changePage();
  const { currentPage } = wrapper.state();
  expect(currentPage).toBe('bot');
});