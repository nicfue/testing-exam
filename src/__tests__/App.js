import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import fakePosts from '..//fakePosts';

it('should render <App /> without user', () => {
  const wrapper = shallow(<App currentPersona="" />);
  expect(wrapper.find('.user').exists()).toBeFalsy();
});

it.skip('populate with fake posts', () => {
  const fakePosts = setCommentsFromLocalStorage(fakePosts.fakePosts);
  const wrapper = shallow(<App data={fakePosts} />);
  const posts = wrapper.find()


})
