import { SHOW_RESULTS } from '../constants';

const recordResults = results => ({
  type: SHOW_RESULTS,
  books: results.books,
  authors: results.authors,
});

export default recordResults;
