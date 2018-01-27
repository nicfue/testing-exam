import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Comments from '../components/Comments';
import * as api from '../api';




beforeEach(() =>{
  localStorage.clear();
});

describe('Unit test on comments', () => {
const comment = jest.fn();
const wrapper = mount(<Comments
  comment="aaa"
  // id="_9hm78a06c"
  postId="565ddy34"
  // author="Zac"
  // date="2018-01-24 13:55:42"
  currentPersona="Zac"
  // onClick={comment}

/>)

it.skip('show comment list', () => {
  expect(wrapper.find('comment').text()).toEqual("aaa");
})

});
