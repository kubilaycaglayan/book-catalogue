import { CHANGE_STATUS } from '../constants';

const status = (state = 'welcome', action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return action.status;
    default:
      return state;
  }
};

export default status;
