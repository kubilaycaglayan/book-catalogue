import { CHANGE_QUERY } from '../constants';

const query = (state = '', action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      return action.query;
    default:
      return state;
  }
};

export default query;
