import React, { PropTypes } from 'react';
import CounterDisplay from './CounterDisplay';
import { SimpleButton } from './Buttons';

const CounterBlock = ({ counter, onIncrement, onDecrement }) => (
  <div>
    <span>{counter}</span>
    <CounterDisplay counter={counter} />
    <SimpleButton onClick={onIncrement} label="inc"/>
    <SimpleButton onClick={onDecrement} label="dec"/>
  </div>
)

CounterBlock.propTyes = {
  counter: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default CounterBlock;
