import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from './postReducer';
import { countReducer } from './countReducer';

function logger(store) {
  return function(next) {
    return function(action) {
      console.log('dispatching action: ', action);
      const result = next(action);
      console.log('New state: ', store.getState());
      return result;
    }
  }
}

const reducer = combineReducers({ postReducer, countReducer });
const middlewares = applyMiddleware(logger, thunk);

export const store = createStore(reducer, middlewares);
