import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  border-radius: 0.5rem;
  border: 1px solid #9b9b9b;
  background-color: #e0e0e0;
  padding: 2rem;

  * + & {
    margin-top: 1rem;
  }
`;

function Section({ children }) {
  return <Container>{children}</Container>;
}

Section.defaultProps = {
  children: [],
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
