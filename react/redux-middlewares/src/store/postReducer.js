import axios from 'axios';

const GET_POSTS = 'GET_POSTS';

export function getPosts() {
  return function(dispatch) {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
      .then(({ data }) => {
        console.log('data', data);
        dispatch({
          type: GET_POSTS,
          payload: data
        })
      })
  }
}

const initialState = {
  posts: [],
}

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}
