import filter from '../../reducers/filter';
import { changeFilter } from '../../actions';

describe('reducers', () => {
  test('returns the initial state', () => {
    expect(filter(undefined, {})).toEqual('0');
  });

  test('returns the new state', () => {
    const newFilter = 'asd';
    const expected = 'asd';
    expect(filter(undefined, changeFilter(newFilter))).toEqual(expected);
  });
});
