const INCREASE_COUNT = 'INCREASE_COUNT';

export function increaseCount() {
  return {
    type: INCREASE_COUNT
  };
}

const initialState = {
  count: 0,
}

export function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state;
  }
}
