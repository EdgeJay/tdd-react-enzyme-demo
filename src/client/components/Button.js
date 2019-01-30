import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from '../utils/colours';

const StyledButton = styled.button`
  color: white;
  background-color: ${colours.green};
  border-radius: 0.5rem;
  border: none;
  padding: 1rem 2rem;
`;

function Button({ label }) {
  return <StyledButton>{label}</StyledButton>;
}

Button.defaultProps = {
  label: '',
};

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
