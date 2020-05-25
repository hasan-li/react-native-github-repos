import { combineReducers } from 'redux';

import reposReducer from './repos';
import searchReducer from './search';

const reducers = combineReducers({
  reposState: reposReducer,
  searchState: searchReducer,
});

export default reducers;