import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2 = styled.h2`
  text-align: center;
`;

function SectionTitle({ children }) {
  return <H2>{children}</H2>;
}

SectionTitle.defaultProps = {
  children: [],
};

SectionTitle.propTypes = {
  children: PropTypes.node,
};

export default SectionTitle;
