import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';

const Container = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <Container>
      <Header />
      <Section />
    </Container>
  );
}

export default App;
