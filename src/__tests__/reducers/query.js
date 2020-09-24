import query from '../../reducers/query';
import { changeQuery } from '../../actions';

describe('query', () => {
  test('returns the initial state', () => {
    expect(query(undefined, {})).toEqual('');
  });

  test('returns the new state', () => {
    const newQuery = 'Author Name';
    const expected = 'Author Name';
    expect(query(undefined, changeQuery(newQuery))).toEqual(expected);
  });
});
