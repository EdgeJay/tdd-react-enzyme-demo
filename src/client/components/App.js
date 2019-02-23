import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import Header from './base/Header';
import RegisterSection from './RegisterSection';
import ResultSection from './ResultSection';

const Container = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <Container>
      <Header />
      <RegisterSection />
      <ResultSection />
    </Container>
  );
}

export default hot(App);
