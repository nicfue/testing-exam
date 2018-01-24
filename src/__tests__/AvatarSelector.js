import React from 'react';
import { mount, shallow, render } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';


describe("<AvatarSelector />", () => {
  it('correct image should render Morgana', () => {
    const image = shallow(<AvatarSelector currentPersona='Morgana' />);
    expect(image.find('img').prop('src')).toEqual('morgana.png');
  });

  it('correct image should render Zac', () => {
    const image = shallow(<AvatarSelector currentPersona='Zac' />);
    expect(image.find('img').prop('src')).toEqual('zac.png');
  });

  it('correct image should render Esmeralda', () => {
    const image = shallow(<AvatarSelector currentPersona='Esmeralda' />);
    expect(image.find('img').prop('src')).toEqual('esmeralda.png');
  });
});
