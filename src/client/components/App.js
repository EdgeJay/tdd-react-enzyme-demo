import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';
import SectionTitle from './SectionTitle';

const Container = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <Container>
      <Header />
      <Section>
        <SectionTitle>Vote for your favourite framework!</SectionTitle>
      </Section>
    </Container>
  );
}

export default App;
