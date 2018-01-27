import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Comments from '../components/Comments';
import * as api from '../api';




beforeEach(() =>{
  localStorage.clear();
});

describe('testing comments', () => {
  const wrapper = mount(<Comments
    postId="1"
    currentPersona="fakeName"
  />)

  it('show comment list', () => {
    const comments = [
      {
        author: 'Zac',
        comment: 'test comment',
        date: '00000000',
        id: '1',
        postId: '1',
        currentPersona: ''
      }
    ];

    wrapper.setState({ comments });
    expect(wrapper.find('SingleComment').text()).toContain("test comment");
  })

it('render comments', () => {
  expect(wrapper).toBeDefined()
})




});
