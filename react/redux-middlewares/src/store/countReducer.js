const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export function increase() {
  return function(dispatch) {
    dispatch({ type: INCREASE })
  }
}

export function decrease() {
  return function(dispatch) {
    dispatch({ type: DECREASE })
  }
}

const initialState = {
  count: 0,
};

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state;
  }
}
