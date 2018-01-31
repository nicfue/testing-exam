import React from 'react';
import { mount } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';


describe('testing create new post', () => {
  const newPost = jest.fn();
  const wrapper = mount(<CreateNewPost author="" updatePosts={newPost} />);

  it('should create a new title', ()=>{
    const title = wrapper.find("#title");
    title.simulate('change', {target: { name: 'title', value: 'testTitle'}});
    expect(wrapper.state().title).toEqual('testTitle');
    });

  it('should create new content', ()=>{
    const content = wrapper.find("#content")
    content.simulate('change', {target: { name: 'content', value: 'testContent'}});
    expect(wrapper.state().content).toEqual('testContent');
    });

  it('testing submit', () => {
    const submit = wrapper.find("form")
    submit.simulate('submit')
  })

  it('snapshots when match', ()=> {
    expect(wrapper).toMatchSnapshot();
  })

})
