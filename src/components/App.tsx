import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import styledNormalize from '../styles/normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    margin: 0;
    line-height: 1;
  }
  html {
    font-size: 14px;
    @media (min-width: 1600px) {
    font-size: 16px;
  }
}
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <h1>Hello There</h1>
      <p>General Kenobi!</p>
    </Container>
  </>
);

export default App;
