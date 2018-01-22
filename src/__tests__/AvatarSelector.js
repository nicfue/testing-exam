import React from 'react';
import { mount, shallow, render } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

test('renders the app', () => {
  render(<AvatarSelector currentPersona='' />);
});
