import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Button from '../components/Button';

describe('button test', () => {
  const mockCallback = jest.fn();
  const btn = shallow(<Button onClick={mockCallback}></Button>)
  const dangerBtn = shallow(<Button danger onClick={mockCallback}></Button>)


 it('check if button exists', () => {
   expect(btn.exists()).toBe(true);
 });

 it('button should work when clicked', () => {
   btn.find('[data-test="button"]').simulate('click');
   console.log(mockCallback.mock.calls.length);
   expect(mockCallback.mock.calls.length).toEqual(1);
 })

 it('button snapshot should match default button', () => {
   expect(btn).toMatchSnapshot();;
 })

 it('button snapshot should match danger default button', () => {
   expect(dangerBtn).toMatchSnapshot();
 })


});
