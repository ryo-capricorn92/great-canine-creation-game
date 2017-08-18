import React from 'react';
import styled, { keyframes } from 'styled-components';

const appLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.span`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 80px;
`;

const Intro = styled.p`
  font-size: large;
`;

const Test = () => (
  <div>
    <Header>
      <Logo>Meh</Logo>
      <h2>Welcome to React</h2>
    </Header>
    <Intro>
    To get started, edit <code>src/App.js</code> and save to reload.
    </Intro>
  </div>
);

export default Test;
