import status from '../../reducers/status';
import { changeStatus } from '../../actions';

describe('query', () => {
  test('returns the initial state', () => {
    expect(status(undefined, {})).toEqual('welcome');
  });

  test('returns the new state', () => {
    const newQuery = 'LOADING';
    const expected = 'LOADING';
    expect(status(undefined, changeStatus(newQuery))).toEqual(expected);
  });
});
