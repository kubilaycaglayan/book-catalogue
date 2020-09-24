import { CHANGE_QUERY } from '../constants';

const changeQuery = query => ({
  type: CHANGE_QUERY,
  query,
});

export default changeQuery;
