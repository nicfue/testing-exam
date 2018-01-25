import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Comments from '../components/Comments';



beforeEach(() =>{
  localStorage.clear();
});


const comments = [
  {
    comment: "aaa",
    id: "_9hm78a06c",
    postId: "565ddy34",
    author: "Zac",
    date: "2018-01-24 13:55:42",
    currentPersona: "Zac"
  }
];
  // leave this for now
it.skip('show comment list', () => {
const wrapper = mount(<Comments postId="565ddy34" currentPersona="Zac" author="Zac" />);
  wrapper.setState({ comments });
  wrapper.instance().renderCommentList(comments);
  expect(wrapper.find('SingleComment').text()).toEqual("aaa");
})
