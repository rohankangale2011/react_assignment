import React from 'react';
import {shallow} from 'enzyme';
import SnackBar from './index';

describe('Snackbar component rendering', () => {
  it('should render snackbar component', () => {
    const wrapper = shallow(<SnackBar />)
    expect(wrapper.exists()).toBe(true);
  });

});