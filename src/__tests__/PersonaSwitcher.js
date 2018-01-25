import React from 'react';
import { mount, shallow, render } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';

it('should switch image to Zac', () => {
  const mockCallBack = jest.fn();
  const currentPersona = 'Zac'
  const wrapper = mount(<PersonaSwitcher currentPersona={currentPersona} changePersona={mockCallBack} />) ;
  expect(wrapper.find('select').prop('value')).toEqual(currentPersona);
})
