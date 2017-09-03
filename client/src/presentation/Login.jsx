import React from 'react';
import { Redirect } from 'react-router-dom';
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

const Error = styled.div`
  color: red;
  background-color: #e5cece;
  border-radius: 3px;
  padding: 5px;
  margin-top: 10px;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      message: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const user = {
      username: event.target.username.value.trim(),
      password: event.target.password.value,
    };

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
    })
      .then((response) => {
        if (!response.ok) {
          return {
            status: response.statusText,
            statusCode: response.status,
          };
        }
        return response.json();
      })
      .then((data) => {
        if (data.statusCode && data.statusCode !== 200) {
          this.setState({
            message: data.status,
          });
        } else {
          this.setState({
            redirect: true,
          });
        }
      });
  }

  render() {
    const { location } = this.props;
    if (this.state.redirect) {
      const { from } = location.state || { from: { pathname: '/' } };
      return (
        <Redirect to={from} />
      );
    }
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
                  <input name="username" required />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>
                  <Label htmlFor="password">Password:</Label>
                </LabelCell>
                <InputCell>
                  <input name="password" type="password" required />
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

export default Login;
