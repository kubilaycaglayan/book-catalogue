import { CHANGE_FILTER } from '../constants';

const filter = (state = '0', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter.toString();
    default:
      return state;
  }
};

export default filter;
