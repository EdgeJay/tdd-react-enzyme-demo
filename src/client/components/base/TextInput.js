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

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(evt) {
    const { onTextChanged } = this.props;
    onTextChanged(evt.target.value);
  }

  render() {
    const { placeholder, value } = this.props;
    return (
      <Input placeholder={placeholder} defaultValue={value} onChange={this.handleTextChange} />
    );
  }
}

TextInput.defaultProps = {
  placeholder: '',
  value: '',
  onTextChanged: () => {},
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onTextChanged: PropTypes.func,
};

export default TextInput;
