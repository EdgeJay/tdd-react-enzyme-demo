import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Section from './base/Section';

function ResultSection({ votes }) {
  return (
    <Section>
      <p>{`Total votes collected: ${votes.length}`}</p>
    </Section>
  );
}

ResultSection.propTypes = {
  votes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapProps = state => ({
  votes: state.registry.votes,
});

export default connect(mapProps)(ResultSection);
