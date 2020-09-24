import { SHOW_RESULTS } from '../constants';

const results = (state = 'welcome', action) => {
  switch (action.type) {
    case SHOW_RESULTS:
      return {
        books: action.books,
        authors: action.authors,
      };
    default:
      return state;
  }
};

export default results;
