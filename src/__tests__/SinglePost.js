import React from 'react';
import { mount } from 'enzyme';
import SinglePost from '../components/SinglePost';

describe('Unit test on SinglePost', () =>{
  const post = jest.fn();
  const wrapper = mount(<SinglePost
    title="heading"
    content="text"
    id="testId"
    author="Zac"
    currentPersona="Zac"
    date="0000000"
    onClick={post}
  />)

  it('should invoke onClick with id', () =>{
    wrapper.find('[data-test="button"]').simulate('click')
    expect(post).toHaveBeenCalledWith('testId');
  });

  it('if author and currentPersona is the same, then the button should render', () => {
    expect(wrapper.find('[data-test="button"]').length).toEqual(1);
  })

  it('if author and currentPersona are not the same, then the button should not render', () => {
    wrapper.setProps({ currentPersona: 'Esmeralda'})
    expect(wrapper.find('[data-test="button"]').length).toEqual(0);
  })

  it('snapshots when match', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('snapshots when mismatch', () => {
    wrapper.setProps({ currentPersona: 'Esmeralda'})
    expect(wrapper).toMatchSnapshot();
  })

  it('SinglePosts should contain a title', () => {
    expect(wrapper.find('article h2').text()).toEqual('heading')
  })

  it('SinglePosts should contain a content', () => {
    expect(wrapper.find('ReactMarkdown').text()).toEqual('text')
  })

})
