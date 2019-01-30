import React from 'react';
import styled from 'styled-components';
import pollImage from '../../assets/img/poll.jpg';

const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  &::before {
    display: block;
    content: '';
    width: 30rem;
    height: 20rem;
    background: url(${pollImage}) no-repeat center;
    background-size: cover;
  }
`;

function Header() {
  return <Container />;
}

export default Header;
