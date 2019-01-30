import React from 'react';
import styled from 'styled-components';
import Header from './base/Header';
import RegisterSection from './RegisterSection';

const Container = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <Container>
      <Header />
      <RegisterSection />
    </Container>
  );
}

export default App;
