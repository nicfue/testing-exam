import React from 'react';
import { mount } from 'enzyme';
import Comments from '../components/Comments';
import * as api from '../api';


describe('testing comments', () => {
  const wrapper = mount(<Comments
    postId="1"
    currentPersona="fakeName"
  />)

  it('render comment component', () => {
    expect(wrapper.state()).toBeDefined()
  })

  it('render comment', () => {
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
    expect(wrapper.state().comments[0].comment).toContain("test comment");
  })

  const inst = wrapper.instance();

  it('call function removeComment from api', () => {
    api.removeComment = jest.fn();
    inst.removeComment()
    expect(api.removeComment).toHaveBeenCalled();
  })

  it('snapshot of comment', ()=> {
    expect(wrapper).toMatchSnapshot();
  })


});
