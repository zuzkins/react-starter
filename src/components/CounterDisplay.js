import React, { PropTypes } from 'react';

const CounterDisplay = ({ counter }) => (
  <h4>{ counter }</h4>
)

CounterDisplay.propTypes = {
  counter: PropTypes.number.isRequired
}

export default CounterDisplay;
