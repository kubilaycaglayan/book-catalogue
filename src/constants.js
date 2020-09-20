export const GOODREADS_API_KEY = process.env.REACT_APP_GOODREADS_API_KEY;
export const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/';

export const WELCOME = 'WELCOME';
export const RESULTS_READY = 'RESULTS_READY';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const initialState = {
  status: WELCOME,
  results: {
    books: [],
    authors: [],
  },
  book: {},
  author: {},
};

export const CHANGE_STATUS = 'CHANGE_STATUS';
export const SHOW_RESULTS = 'SHOW_RESULTS';
export const RECORD_BOOK = 'RECORD_BOOK';
export const RECORD_AUTHOR = 'RECORD_AUTHOR';
