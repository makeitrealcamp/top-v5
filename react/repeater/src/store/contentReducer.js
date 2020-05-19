const CHANGE_CONTENT = 'CHANGE_CONTENT';

// action creator
export function changeContent(content) {
  return {
    type: CHANGE_CONTENT,
    payload: content
  };
}

const initialState = {
  content: '',
}

export function contentReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CONTENT:
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
}
