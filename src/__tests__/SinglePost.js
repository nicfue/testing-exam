import React from 'react';
import { mount, shallow, render } from 'enzyme';
import SinglePost from '../components/SinglePost';
import Posts from '../components/Posts';
import SingleComment from '../components/SingleComment';


it('if author and currentPersona is the same, then the button should render', () => {
  const mock = jest.fn();
  const wrapper = mount(<SinglePost
    title="heading"
    content="text"
    id="testId"
    author="Zac"
    currentPersona="Zac"
    date="0000000"
    onClick={mock}
    />)

  expect(wrapper.find('Button').length).toEqual(1);
})

it('if author and currentPersona are not the same, then the button should not render', () => {
  const mock = jest.fn();
  const wrapper = mount(<SinglePost
    title="heading"
    content="text"
    id="testId"
    author="Zac"
    currentPersona="Esmeralda"
    date="0000000"
    onClick={mock}
    />)

  expect(wrapper.find('Button').length).toEqual(0);
})
