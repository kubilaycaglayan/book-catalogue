import { RECORD_AUTHOR } from '../constants';

const recordAuthor = author => ({
  type: RECORD_AUTHOR,
  author,
});

export default recordAuthor;
