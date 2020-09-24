import book from '../../reducers/book';
import { recordBook } from '../../actions';

describe('reducers', () => {
  test('returns the initial state', () => {
    expect(book(undefined, {})).toEqual({});
  });

  test('returns the new state', () => {
    const newBook = {
      id: [10],
      name: 'Kubilay',
    };
    const expected = {
      id: 10,
      name: 'Kubilay',
    };
    expect(book(undefined, recordBook(newBook))).toEqual(expected);
  });
});
