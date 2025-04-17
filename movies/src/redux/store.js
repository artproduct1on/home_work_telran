import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { movieReducer } from './reducers/movieReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));