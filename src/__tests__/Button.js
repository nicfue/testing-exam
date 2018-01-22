import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Button from '../components/Button';

describe('<Button />', () => {
 it('check if button exists', () => {
   const btn = shallow(<Button onClick={() => {}} />);
   expect(btn.exists()).toBe(true);
 });
});
