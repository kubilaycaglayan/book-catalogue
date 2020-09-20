import { RECORD_AUTHOR } from '../constants';

const author = (state = {}, action) => {
  switch (action.type) {
    case RECORD_AUTHOR:
      return {
        ...action.author,
      };
    default:
      return state;
  }
};

export default author;
