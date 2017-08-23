import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 3px;
`;

const SubmitCell = styled.td.attrs({
  colSpan: '2',
})`
  padding: 5px;
`;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameConfirm: false,
    };
  }

  render() {
    return (
      <Container>
        <form>
          <table>
            <tbody>
              <tr>
                <LabelCell>
                  <Label htmlFor="username">Username:</Label>
                </LabelCell>
                <InputCell>
                  <input name="username" />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>
                  <Label htmlFor="password">Password:</Label>
                </LabelCell>
                <InputCell>
                  <input name="password" type="password" />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>
                  <Label htmlFor="email">Email:</Label>
                </LabelCell>
                <InputCell>
                  <input name="email" type="email" />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>
                  <Label htmlFor="email_confirm">Confirm Email:</Label>
                </LabelCell>
                <InputCell>
                  <input name="email_confirm" type="email" />
                </InputCell>
              </tr>
              <tr>
                <LabelCell>
                  <Label htmlFor="birthday">Birthday:</Label>
                </LabelCell>
                <InputCell>
                  <input name="birthday" type="date" />
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
      </Container>
    );
  }
}

export default Signup;
