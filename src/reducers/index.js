import { combineReducers } from 'redux';
import status from './status';
import results from './results';
import book from './book';
import author from './author';
import query from './query';
import filter from './filter';

const reducer = combineReducers({
  status,
  results,
  author,
  book,
  query,
  filter,
});

export default reducer;
