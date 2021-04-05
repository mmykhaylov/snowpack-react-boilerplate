import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const App: React.FC = () => (
  <>
    <Container>
      <h1>Hello There</h1>
      <p>General Kenobi!</p>
    </Container>
  </>
);

export default App;
