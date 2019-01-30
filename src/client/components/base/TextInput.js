import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colours from '../../utils/colours';

const Input = styled.input`
  text-align: center;
  color: black;
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${colours.darkGrey};
`;

function TextInput({ placeholder }) {
  return <Input placeholder={placeholder} />;
}

TextInput.defaultProps = {
  placeholder: '',
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
};

export default TextInput;
