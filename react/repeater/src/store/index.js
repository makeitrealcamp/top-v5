import { createStore, combineReducers } from 'redux';
import { contentReducer } from './contentReducer';
import { countReducer } from './countReducer';

const reducer = combineReducers({ contentReducer, countReducer });

export const store = createStore(reducer);
