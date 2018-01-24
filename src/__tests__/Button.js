import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Button from '../components/Button';

describe('button test', () => {
  const btn = shallow(<Button onClick={() => {}} />);
  const btnClick = jest.fn();
  const button = shallow(<Button onClick={btnClick}></Button>)
  const dangerButton = shallow(<Button danger onClick={btnClick}></Button>)

 it('check if button exists', () => {
   expect(btn.exists()).toBeTruthy();
 });

 it('check if button works onClick', () => {
     button.simulate('click');
     expect(btnClick).toBeDefined();
 })
 it('button snapshot should match default button', () => {
   expect(button).toMatchSnapshot();
 })
 it('button snapshot should match default button', () => {
   expect(dangerButton).toMatchSnapshot();
 })
});
