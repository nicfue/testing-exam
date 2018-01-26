import React from 'react';
import { mount, shallow, render } from 'enzyme';
import SinglePost from '../components/SinglePost';

describe('Unit test on SinglePost', ()=>{
  const post = jest.fn();
  const wrapper1 = mount(<SinglePost
    title="heading"
    content="text"
    id="testId"
    author="Zac"
    currentPersona="Zac"
    date="0000000"
    onClick={post}
    />)

    const wrapper2 = mount(<SinglePost
      title="heading"
      content="text"
      id="testId"
      author="Zac"
      currentPersona="Morgana"
      date="0000000"
      onClick={post}
      />)

it('if author and currentPersona is the same, then the button should render', () => {
  expect(wrapper1.find('Button').length).toEqual(1);
})

it('if author and currentPersona are not the same, then the button should not render', () => {
  expect(wrapper2.find('Button').length).toEqual(0);
 })

 it('snapshots when match', ()=> {
   expect(wrapper1).toMatchSnapshot();
 })

 it('snapshots when mismatch', ()=> {
   expect(wrapper2).toMatchSnapshot();
 })

 it('posts should contain a title and content', () => {
   expect(wrapper1.find('article h2').text()).toEqual('heading')
 })

 it('test onclick with id', ()=>{
   wrapper1.find('button').simulate('click');
   expect(post).toBeCalledWith('testId');
 });

})
