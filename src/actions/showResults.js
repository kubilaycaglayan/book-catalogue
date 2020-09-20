import { SHOW_RESULTS } from '../constants';

const showResults = results => ({
  type: SHOW_RESULTS,
  books: results.books,
  authors: results.authors,
});

export default showResults;
