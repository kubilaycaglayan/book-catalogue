import { RECORD_BOOK } from '../constants';

const recordBook = book => ({
  type: RECORD_BOOK,
  book,
});

export default recordBook;
