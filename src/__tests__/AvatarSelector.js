import React from 'react';
import { mount, shallow, render } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

it('correct image should render Morgana', () => {
  const image = shallow(<AvatarSelector currentPersona='Morgana' />);
  expect(image.find('img').prop('src')).toEqual('morgana.png');
});
