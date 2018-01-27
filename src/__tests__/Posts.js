import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Posts from '../components/Posts';

test.skip('renders the app', () => {
  render(<Posts />);
});


it.skip('should have a post', () => {
  const wrapper = shallow(<Posts  />)
})
