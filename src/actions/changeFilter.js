import { CHANGE_FILTER } from '../constants';

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export default changeFilter;
