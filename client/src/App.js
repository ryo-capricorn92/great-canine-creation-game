/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import restricted from './container/Restricted';
import Test, { One, Two, Three } from './presentation/Test';
import Signup from './presentation/Signup';
import Login from './presentation/Login';

const Container = styled.div`
  text-align: center;
`;

const App = () => (
  <BrowserRouter>
    <Container>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />

      <Route exact path="/" component={restricted(Test)} />
      <Route path="/one" component={restricted(One)} />
      <Route path="/two" component={restricted(Two)} />
      <Route path="/three" component={restricted(Three)} />
    </Container>
  </BrowserRouter>
);

export default App;
/* eslint-enable react/jsx-filename-extension */
