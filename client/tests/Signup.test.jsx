import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import fetch from 'jest-fetch-mock';

import Signup from '../src/presentation/Signup';

global.fetch = fetch;

const formErrorMessage = 'Please address the issues before submitting the form';
const submitForm = {
  username: 'Ryo',
  email: 'Ryo@test.com',
  password: 'testingPassword123',
  birthday: '12-08-1993',
};

describe('Signup', () => {
  it('should render Signup without failing', () => {
    const wrapper = mount(<Signup />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should "submit" a valid form properly', (done) => {
    const wrapper = mount(<Signup />);
    const onSubmitSpy = jest.spyOn(wrapper.instance(), 'onSubmit');
    wrapper.update();

    fetch.mockResponseOnce(JSON.stringify({ usernameIsUsed: false }));
    fetch.mockResponseOnce(JSON.stringify({ emailIsUsed: false }));
    fetch.mockResponseOnce(JSON.stringify({}));

    wrapper.find('input[name="username"]').simulate('blur', { target: { value: submitForm.username } });
    setImmediate(() => {
      wrapper.find('input[name="email"]').simulate('blur', { target: { value: submitForm.email } });
      setImmediate(() => {
        wrapper.find('input[name="email_confirm"]').simulate('blur', { target: { value: submitForm.email } });
        wrapper.find('input[name="password"]').simulate('blur', { target: { value: submitForm.password } });
        wrapper.find('input[name="birthday"]').simulate('blur', { target: { value: submitForm.birthday } });
        wrapper.find('form').simulate('submit', { target: submitForm });
        setImmediate(() => {
          expect(onSubmitSpy).toHaveBeenCalled();
          onSubmitSpy.mockReset();
          onSubmitSpy.mockRestore();
          expect(toJson(wrapper)).toMatchSnapshot();
          done();
        });
      });
    });
  });

  it('should show close icon if username is taken', (done) => {
    const wrapper = mount(<Signup />);

    fetch.mockResponseOnce(JSON.stringify({ usernameIsUsed: true }));

    wrapper.find('input[name="username"]').simulate('blur', { target: { value: 'Ryo' } });

    setImmediate(() => {
      expect(wrapper.state().status.username).toEqual('close');
      expect(toJson(wrapper)).toMatchSnapshot();
      done();
    });
  });

  it('should show close icon if the email is taken', (done) => {
    const wrapper = mount(<Signup />);

    fetch.mockResponseOnce(JSON.stringify({ emailIsUsed: true }));

    wrapper.find('input[name="email"]').simulate('blur', { target: { value: 'Ryo@test.com' } });

    setImmediate(() => {
      expect(wrapper.state().status.email).toEqual('close');
      expect(toJson(wrapper)).toMatchSnapshot();
      done();
    });
  });

  it('should show close icon if the emails don\'t match', (done) => {
    const wrapper = mount(<Signup />);

    wrapper.find('input[name="email"]').simulate('blur', { target: { value: 'Ryo@test.com' } });

    setImmediate(() => {
      wrapper.find('input[name="email_confirm"]').simulate('blur', { target: { value: 'Tanka@test.com' } });
      expect(wrapper.state().status.emailConfirm).toEqual('close');
      expect(toJson(wrapper)).toMatchSnapshot();
      done();
    });
  });

  it('should show no icon for username/email/password if empty', (done) => {
    const wrapper = mount(<Signup />);

    wrapper.find('input[name="username"]').simulate('blur', { target: { value: '' } });
    setImmediate(() => {
      wrapper.find('input[name="email"]').simulate('blur', { target: { value: '' } });
      setImmediate(() => {
        wrapper.find('input[name="password"]').simulate('blur', { target: { value: '' } });
        expect(wrapper.state().status.username).toEqual('');
        expect(wrapper.state().status.email).toEqual('');
        expect(wrapper.state().status.password).toEqual('');
        expect(toJson(wrapper)).toMatchSnapshot();
        done();
      });
    });
  });

  it('should show no icon for email confirm when email taken even if it matches', (done) => {
    const wrapper = mount(<Signup />);

    fetch.mockResponseOnce(JSON.stringify({ emailIsUsed: true }));

    wrapper.find('input[name="email"]').simulate('blur', { target: { value: 'Ryo@test.com' } });

    setImmediate(() => {
      wrapper.find('input[name="email_confirm"]').simulate('blur', { target: { value: 'Ryo@test.com' } });
      expect(wrapper.state().status.emailConfirm).toEqual('');
      expect(toJson(wrapper)).toMatchSnapshot();
      done();
    });
  });

  it('should alert the user if the password is not sufficient', (done) => {
    const wrapper = mount(<Signup />);

    wrapper.find('input[name="password"]').simulate('blur', { target: { value: 'ryo' } });
    wrapper.find('form').simulate('submit', { target: submitForm });
    setImmediate(() => {
      expect(wrapper.state().message).toEqual(formErrorMessage);
      done();
    });
  });
});
