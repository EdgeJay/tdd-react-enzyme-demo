import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';
import SectionTitle from './SectionTitle';
import TextInput from './TextInput';
import Button from './Button';

const Container = styled.div`
  padding: 2rem;
`;

function App() {
  return (
    <Container>
      <Header />
      <Section>
        <SectionTitle>Vote for your favourite framework!</SectionTitle>
        <TextInput placeholder="Firstly, your full name please" />
        <Button label="Let's Go!" />
      </Section>
    </Container>
  );
}

export default App;
