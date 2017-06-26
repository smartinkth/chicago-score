import { connect } from 'react-redux'
import Buttons from './Buttons'
import { increment, decrement, resetScores, resetExcept, markChicago } from './../actions'
import { ActionCreators } from 'redux-undo'

const mapDispatchToProps = dispatch => {
  return {
    increment: (amount) => {
      dispatch(increment(amount))
    },
    decrement: (amount) => {
      dispatch(decrement(amount))
    },
    undo: () => {
      dispatch(ActionCreators.undo());
    },
    resetAll: () => {
      dispatch(resetScores())
    },
    resetExcept: () => {
      dispatch(resetExcept())
    },
    markChicago: () => {
      dispatch(markChicago())
    }
  }
};

const ButtonContainer = connect(null, mapDispatchToProps)(Buttons);

export default ButtonContainer