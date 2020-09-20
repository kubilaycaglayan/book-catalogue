import { combineReducers } from 'redux';
import status from './status';
import results from './results';
import book from './book';
import author from './author';

const reducer = combineReducers({
  status,
  results,
  book,
  author,
});

export default reducer;
