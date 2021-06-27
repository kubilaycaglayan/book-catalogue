import { RECORD_BOOK } from '../constants';

const book = (state = {}, action) => {
  switch (action.type) {
    case RECORD_BOOK:
      return {
        ...action.book,
        id: parseInt(action.book.id, 10),
      };
    default:
      return state;
  }
};

export default book;
