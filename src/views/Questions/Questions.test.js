import React from 'react';
import { shallow } from 'enzyme';
import Questions from './Questions';

describe('<Questions />', () => {
  test('renders', () => {
    const wrapper = shallow(<Questions />);
    expect(wrapper).toMatchSnapshot();
  });
});
