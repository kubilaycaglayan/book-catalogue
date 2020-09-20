import { RECORD_BOOK } from '../constants';

const book = (state = {}, action) => {
  switch (action.type) {
    case RECORD_BOOK:
      return {
        ...action.book,
      };
    default:
      return state;
  }
};

export default book;
