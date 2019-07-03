import React from 'react';
import {shallow} from 'enzyme';
import Loader from './index';
import {LoaderWrapper} from './loader.style';

describe('Loader component rendering', () => {
  it('should render loader component', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper.exists()).toBe(true);
  });

  it('should not render activity indicator initially', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper.find(LoaderWrapper).exists()).toBe(false);
    expect(wrapper.find(LoaderWrapper).length).toBe(0);
  });

  it('should render activity indicator when set visibility to TRUE', () => {
    const wrapper = shallow(<Loader isVisible={true} />)
    expect(wrapper.find(LoaderWrapper).exists()).toBe(true);
    expect(wrapper.find(LoaderWrapper).length).toBe(1);
  });

});