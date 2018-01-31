import React from 'react';
import { shallow } from 'enzyme';
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


  it('post should have a title, content, id, and author', () => {
    const wrapper = shallow(<Posts currentPersona="Zac" />)
    wrapper.setState({ posts });
    expect(wrapper.state().posts[0].content).toEqual("content");
    expect(wrapper.state().posts[0].title).toEqual("heading");
    expect(wrapper.state().posts[0].id).toEqual("testId");
    expect(wrapper.state().posts[0].author).toEqual("Zac");
  })


  it('snapshot of comment', ()=> {
    const wrapper = shallow(<Posts currentPersona="Zac" />)
    expect(wrapper).toMatchSnapshot();
  })

})
