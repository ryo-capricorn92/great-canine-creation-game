import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-right: 5px;
`;

const LabelCell = styled.td`
  padding: 3px;
  text-align: right;
`;

const InputCell = styled.td`
  position: relative;
  padding: 3px;
`;

const SubmitCell = styled.td.attrs({
  colSpan: '2',
})`
  padding: 5px;
`;

const Icon = styled.i`
  position: absolute;
  left: 100%;

  &.fa-close {
    color: red;
  }

  &.fa-check {
    color: green;
  }
`;

const Error = styled.div`
  color: red;
  background-color: #e5cece;
  border-radius: 3px;
  padding: 5px;
  margin-top: 10px;
`;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      status: {
        username: '',
        email: '',
        emailConfirm: '',
        password: '',
        birthday: '',
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.checkConfirmEmail = this.checkConfirmEmail.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const isInvalid = (bool, key) => bool || this.state.status[key] === 'close';
    if (Object.keys(this.state.status).reduce(isInvalid, false)) {
      this.setState({ message: 'Please address the issues before submitting the form' });
      return false;
    }

    const user = {
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.email.value,
      birthday: new Date(event.target.birthday.value),
    };

    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    }).then((res) => {
      console.log(res.json());
    });
  }

  checkUsername(event) {
    const message = '';
    let status = Object.assign({}, this.state.status);
    if (!event.target.value.trim()) {
      status.username = '';
      this.setState({ message, status });
    } else {
      status.username = 'circle-o-notch fa-spin';
      this.setState({ message, status });

      fetch(`api/check/username/${event.target.value}`)
        .then(res => res.json())
        .then((res) => {
          status = Object.assign({}, this.state.status);
          if (res.usernameIsUsed) {
            status.username = 'close';
          } else {
            status.username = 'check';
          }
          this.setState({ message, status });
        });
    }
  }

  checkEmail(event) {
    const email = event.target.value;
    const message = '';
    let status = Object.assign({}, this.state.status);
    if (!event.target.value.trim()) {
      status.email = '';
      this.setState({ email, message, status });
    } else {
      status.email = 'circle-o-notch fa-spin';
      this.setState({ email, message, status });

      fetch(`api/check/email/${email}`)
        .then(res => res.json())
        .then((res) => {
          status = Object.assign({}, this.state.status);
          if (res.emailIsUsed) {
            status.email = 'close';
          } else {
            status.email = 'check';
          }
          this.setState({ email, message, status });
        });
    }
  }

  checkConfirmEmail(event) {
    const message = '';
    const status = Object.assign({}, this.state.status);
    if (this.state.status.email === 'close' || !event.target.value.trim()) {
      status.emailConfirm = '';
    } else if (event.target.value === this.state.email) {
      status.emailConfirm = 'check';
    } else {
      status.emailConfirm = 'close';
    }
    this.setState({ message, status });
  }

  checkPassword(event) {
    const message = '';
    const status = Object.assign({}, this.state.status);
    if (!event.target.value.trim()) {
      status.password = '';
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(event.target.value)) {
      status.password = 'check';
    } else {
      status.password = 'close';
    }
    this.setState({ message, status });
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr>
                <LabelCell>
                  <Label htmlFor="username">Username:</Label>
                </LabelCell>
                <InputCell>
                  <input name="username" onBlur={this.checkUsername} required />
                  <Icon className={`fa fa-${this.state.status.username}`} aria-hidden="true" />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>
                  <Label htmlFor="password">Password:</Label>
                </LabelCell>
                <InputCell>
                  <input name="password" type="password" onBlur={this.checkPassword} required />
                  <Icon className={`fa fa-${this.state.status.password}`} aria-hidden="true" />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>
                  <Label htmlFor="email">Email:</Label>
                </LabelCell>
                <InputCell>
                  <input name="email" type="email" onBlur={this.checkEmail} required />
                  <Icon className={`fa fa-${this.state.status.email}`} aria-hidden="true" />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>
                  <Label htmlFor="email_confirm">Confirm Email:</Label>
                </LabelCell>
                <InputCell>
                  <input name="email_confirm" onBlur={this.checkConfirmEmail} autoComplete="off" required />
                  <Icon className={`fa fa-${this.state.status.emailConfirm}`} aria-hidden="true" />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>
                  <Label htmlFor="birthday">Birthday:</Label>
                </LabelCell>
                <InputCell>
                  <input name="birthday" type="date" required />
                </InputCell>
              </tr>
              <tr>
                <SubmitCell>
                  <input type="submit" value="Submit" />
                </SubmitCell>
              </tr>
            </tbody>
          </table>
        </form>
        {this.state.message ? (<Error>{this.state.message}</Error>) : undefined}
      </Container>
    );
  }
}

export default Signup;
