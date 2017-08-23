import React from 'react';
import styled from 'styled-components';

const Display = styled.div`
  background: #f0f0f0;
  color: #dadada;
  box-shadow: 1px 1px 3px rgba(54, 54, 54, 0.25);
  padding: 15px;
  text-align: center;
  font-size: 14px;
`;

const All = () => (
  <div>
    <One />
    <Two />
    <Three />
  </div>
);

export default All;

export const One = () => <Display>One</Display>;
export const Two = () => <Display>Two</Display>;
export const Three = () => <Display>Three</Display>;
