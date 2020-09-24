import results from '../../reducers/results';
import { recordResults } from '../../actions';

describe('results', () => {
  test('returns the initial state', () => {
    expect(results(undefined, {})).toEqual('welcome');
  });

  test('returns the new state', () => {
    const newResults = {
      books: [],
      authors: [],
    };
    const expected = {
      books: [],
      authors: [],
    };
    expect(results(undefined, recordResults(newResults))).toEqual(expected);
  });
});
