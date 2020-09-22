import author from '../../reducers/author';
import { recordAuthor } from '../../actions';

describe('reducers', () => {
  test('returns the initial state', () => {
    expect(author(undefined, {})).toEqual({});
  });

  test('returns the new state', () => {
    const newAuthor = {
      id: [10],
      name: 'Kubilay',
    };
    const expected = {
      id: 10,
      name: 'Kubilay',
    };
    expect(author(undefined, recordAuthor(newAuthor))).toEqual(expected);
  });
});
