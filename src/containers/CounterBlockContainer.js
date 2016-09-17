import { connect } from 'react-redux';

import CounterBlock from '../components/CounterBlock';
import { incrementCounter, decrementCounter } from '../actions';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(incrementCounter())
    },
    onDecrement: () => {
      dispatch(decrementCounter())
    }
  }
}

const CounterBlockContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterBlock);

export default CounterBlockContainer;
