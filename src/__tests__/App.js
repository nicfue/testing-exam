import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';


describe('tesing <App />', () => {
  const wrapper = shallow(<App />);

  it('should render App without user', () => {
    const user = wrapper.state().currentPersona;
    expect(user).toBe('');
  });

  it('Render App with user', () => {
    const persona = 'Nisse';
    wrapper.setState({'currentPersona': persona});
    const user = wrapper.state().currentPersona;
    expect(user).toBe('Nisse');
  });

  it('App should contain "Talk to a real human"',() =>{
    expect(wrapper.contains('Talk to a real human')).toBeTruthy();
  });

  it('Render App default page', () => {
    const { currentPage } = wrapper.state();
    expect(currentPage).toBe('home');
  });

  it('should call the function "changePage"', () => {
    expect(wrapper.instance().changePage());
  });

  it('button snapshot should match danger default button', () => {
    expect(wrapper).toMatchSnapshot();
  })

})
