import React from 'react';
import Section from './base/Section';
import SectionTitle from './base/SectionTitle';
import TextInput from './base/TextInput';
import Button from './base/Button';

function RegisterSection() {
  return (
    <Section>
      <SectionTitle>Vote for your favourite framework!</SectionTitle>
      <TextInput placeholder="Firstly, your full name please" />
      <Button label="Let's Go!" />
    </Section>
  );
}

export default RegisterSection;
