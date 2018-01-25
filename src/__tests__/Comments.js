import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Comments from '../components/Comments';



beforeEach(() =>{
  localStorage.clear();
});


const comments = [
  {
    comment: "blabla",
    id: "1",
    postId: 1,
    author: "Esmeralda",
    date: "2018-01-24",
    currentPersona: "Esmeralda"
  }
];
  // leave this for now
it.skip('show comment list', () => {
const wrapper = mount(<Comments postId="1" currentPersona="Esmeralda" author="Esmeralda" />);
  wrapper.setState({ comments });
  wrapper.instance().renderCommentList(comments);
  expect(wrapper.find('SingleComment').text()).toEqual("blabla");
})
