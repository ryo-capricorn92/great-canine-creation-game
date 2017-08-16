/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const appLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Container = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`;

const Intro = styled.p`
  font-size: large;
`;

const App = () => (
  <Container>
    <Header>
      <Logo src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </Header>
    <Intro>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Intro>
  </Container>
);

export default App;
/* eslint-enable react/jsx-filename-extension */
