import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from '../utils/colours';

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  border-radius: 0.5rem;
  border: 1px solid ${colours.darkGrey};
  background-color: ${colours.lightGrey};
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
