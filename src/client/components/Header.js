import React from 'react';
import styled from 'styled-components';
import pollImage from '../assets/img/poll.jpg';

const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  img {
    flex: 300px;
  }
`;

function Header() {
  return (
    <Container>
      <img src={pollImage} alt="Let's vote!" title="Let's vote!" />
    </Container>
  );
}

export default Header;
