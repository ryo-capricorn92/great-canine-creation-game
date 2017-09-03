import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import fetch from 'jest-fetch-mock';

import Login from '../../src/presentation/Login';

global.fetch = fetch;

const submitForm = {
  username: {
    value: 'Ryo',
  },
  password: {
    value: 'testingPassword123',
  },
};

describe('Login', () => {
  it('should render Login without failing', () => {
    const wrapper = mount(<Login />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should "submit" a valid form properly', (done) => {
    const wrapper = mount(<Login />);
    const onSubmitSpy = jest.spyOn(wrapper.instance(), 'onSubmit');
    wrapper.update();

    fetch.mockRejectOnce(JSON.stringify({
      ok: true,
      json: () => {},
    }));

    wrapper.find('form').simulate('submit', { target: submitForm });
    setImmediate(() => {
      expect(onSubmitSpy).toHaveBeenCalled();
      onSubmitSpy.mockReset();
      onSubmitSpy.mockRestore();
      expect(toJson(wrapper)).toMatchSnapshot();
      done();
    });
  });

  it('should alert the user if the username or password is wrong', (done) => {
    const wrapper = mount(<Login />);

    fetch.mockResponseOnce(JSON.stringify({
      ok: true,
      statusText: 'failure',
      status: '401',
      json: () => {},
    }));

    wrapper.find('form').simulate('submit', { target: submitForm });
    setImmediate(() => {
      expect(toJson(wrapper)).toMatchSnapshot();
      done();
    });
  });
});
