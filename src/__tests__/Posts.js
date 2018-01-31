import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Posts from '../components/Posts';


describe('testing posts component', () => {
  const posts = [
    {
      title: "heading",
      content: "content",
      id: "testId",
      author: "Zac",
      currentPersona: "Zac",
      date: "0000000"
    }
  ];


  it('post should have a content', () => {
    const wrapper = shallow(<Posts currentPersona="Zac" />)
    wrapper.setState({ posts });
    expect(wrapper.state().posts[0].content).toContain("content");
  })

  it('post should have a title', () => {
    const wrapper = shallow(<Posts currentPersona="Zac" />)
    wrapper.setState({ posts });
    expect(wrapper.state().posts[0].title).toContain("heading");
  })

  it('post should have an author', () => {
    const wrapper = shallow(<Posts currentPersona="Zac" />)
    wrapper.setState({ posts });
    expect(wrapper.state().posts[0].author).toContain("Zac");
  })

  it('snapshot of comment', ()=> {
    const wrapper = shallow(<Posts currentPersona="Zac" />)
    expect(wrapper).toMatchSnapshot();
  })

})
