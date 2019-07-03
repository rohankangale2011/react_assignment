import React from 'react';
import {shallow} from 'enzyme';
import HomeComponent from './home.component';

const mockCall = jest.fn();

describe('Home component rendering', () => {
  const wrapper = shallow(<HomeComponent getNYData={mockCall} />)
  it('should render home component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});