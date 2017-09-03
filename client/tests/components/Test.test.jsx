import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Test from '../../src/presentation/Test';

test('Test renders', () => {
  const wrapper = mount(<Test />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
