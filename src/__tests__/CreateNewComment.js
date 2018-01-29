import React from 'react';
import { mount, shallow, render } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';

const newComment = mount(<CreateNewComment author='Esmeralda' postId="1" updateComments={() => { }} />);

it('create new comment', () => {
  newComment.find('textarea[name="comment"]').simulate('change', { target: { name: 'comment', value: 'ny kommentar' } });
  expect(newComment.state().comment).toContain('ny kommentar');
})

it('testing to submit', () => {
  const onSubmit = jest.fn();
  const wrapper = shallow(<CreateNewComment updateComments={onSubmit} author="Esmeralda" postId="1" />);
  wrapper.find("form").simulate("submit",{ preventDefault: onSubmit });
  expect(onSubmit).toBeCalled();
})