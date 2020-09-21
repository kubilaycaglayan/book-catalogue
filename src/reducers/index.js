import { combineReducers } from 'redux';
import status from './status';
import results from './results';
import book from './book';
import author from './author';
import query from './query';

const reducer = combineReducers({
  status,
  results,
  author,
  book,
  query,
});

export default reducer;
