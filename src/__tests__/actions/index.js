import {
  CHANGE_FILTER, CHANGE_QUERY, CHANGE_STATUS, RECORD_AUTHOR, RECORD_BOOK, SHOW_RESULTS, LOADING,
} from '../../constants';
import * as action from '../../actions';

describe('actions', () => {
  test('creates an action to change filter', () => {
    const filter = '99';
    const expectedAction = {
      type: CHANGE_FILTER,
      filter,
    };
    expect(action.changeFilter(filter)).toEqual(expectedAction);
  });

  test('creates an action to change query', () => {
    const query = 'author';
    const expectedAction = {
      type: CHANGE_QUERY,
      query,
    };
    expect(action.changeQuery(query)).toEqual(expectedAction);
  });

  test('creates an action to change status', () => {
    const status = LOADING;
    const expectedAction = {
      type: CHANGE_STATUS,
      status,
    };
    expect(action.changeStatus(status)).toEqual(expectedAction);
  });

  test('creates an action to record author', () => {
    const author = {
      name: 'Dawkins',
    };
    const expectedAction = {
      type: RECORD_AUTHOR,
      author,
    };
    expect(action.recordAuthor(author)).toEqual(expectedAction);
  });

  test('creates an action to record book', () => {
    const book = {
      title: 'Great Expectations',
    };
    const expectedAction = {
      type: RECORD_BOOK,
      book,
    };
    expect(action.recordBook(book)).toEqual(expectedAction);
  });

  test('creates an action to record the results', () => {
    const results = {
      books: [],
      authors: [],
    };
    const expectedAction = {
      type: SHOW_RESULTS,
      books: results.books,
      authors: results.authors,
    };
    expect(action.recordResults(results)).toEqual(expectedAction);
  });
});
