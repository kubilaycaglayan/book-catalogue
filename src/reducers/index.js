import { combineReducers } from 'redux';
import status from './status';
import results from './results';
import book from './book';
import author from './author';

const reducer = combineReducers({
  status,
  results,
});

export default reducer;
