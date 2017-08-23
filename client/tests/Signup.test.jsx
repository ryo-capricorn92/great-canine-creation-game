import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Signup from '../src/presentation/Signup';

test('Signup renders', () => {
  const wrapper = mount(<Signup />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
