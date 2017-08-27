/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import Test, { One, Two, Three } from './presentation/Test';
import Signup from './presentation/Signup';

const Container = styled.div`
  text-align: center;
`;

const App = () => (
  <BrowserRouter>
    <Container>
      <Route exact path="/" component={Test} />
      <Route path="/one" component={One} />
      <Route path="/two" component={Two} />
      <Route path="/three" component={Three} />
      <Route path="/signup" component={Signup} />
    </Container>
  </BrowserRouter>
);

export default App;
/* eslint-enable react/jsx-filename-extension */
