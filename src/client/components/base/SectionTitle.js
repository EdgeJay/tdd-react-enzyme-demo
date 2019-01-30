import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
`;

function SectionTitle({ children }) {
  return <H1>{children}</H1>;
}

SectionTitle.defaultProps = {
  children: [],
};

SectionTitle.propTypes = {
  children: PropTypes.node,
};

export default SectionTitle;
