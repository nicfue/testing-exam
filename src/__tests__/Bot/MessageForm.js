import React from 'react';
import { mount, shallow, render } from 'enzyme';
import MessageForm from "../../components/Bot/MessageForm";

it('simulate submit', () => {
  const fakeSubmit= jest.fn()
  const wrapper = mount(<MessageForm userMessage={fakeSubmit} onSubmit={fakeSubmit} />);
  wrapper.find("form").simulate("submit",{  fakeSubmit  });
  expect(fakeSubmit).toHaveBeenCalled();
  
});