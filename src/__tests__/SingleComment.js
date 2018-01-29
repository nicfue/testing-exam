import React from 'react';
import { mount, shallow, render } from 'enzyme';
import SingleComment from '../components/SingleComment';


describe('Testing SingleComment', ()=>{
  const post = jest.fn();
  const wrapper = mount(<SingleComment
    author="Zac"
    comment="text"
    date="0000000"
    id="testId"
    onClick={post}
    currentPersona="Zac"
  />)

  it('should have an id when onClick', () => {
    wrapper.find('[data-test="button"]').simulate('click');
    expect(post).toHaveBeenCalledWith('testId')
  })

  it('if author and currentPersona is the same, then the button should render', () => {
    expect(wrapper.find('Button').length).toEqual(1);
  })

  it('if author and currentPersona is NOT the same, then the button should not render', () => {
    wrapper.setProps({ currentPersona: 'Esmeralda' })
    expect(wrapper.find('Button').length).toEqual(0);
  })


});
