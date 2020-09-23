export const GOODREADS_API_KEY = 'Ys0aMCpm754ABIoafSezZw';
export const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/';

export const WELCOME = 'WELCOME';
export const RESULTS_READY = 'RESULTS_READY';
export const BOOK_READY = 'BOOK_READY';
export const AUTHOR_READY = 'AUTHOR_READY';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const initialState = {
  status: WELCOME,
  results: {
    books: [],
    authors: [],
  },
  book: {
    title: [''],
    id: 0,
    authors: [{}],
    publisher: [''],
  },
  author: {
    id: 0,
  },
  query: '',
  filter: '0',
};

export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CHANGE_QUERY = 'CHANGE_QUERY';
export const SHOW_RESULTS = 'SHOW_RESULTS';
export const RECORD_BOOK = 'RECORD_BOOK';
export const RECORD_AUTHOR = 'RECORD_AUTHOR';
