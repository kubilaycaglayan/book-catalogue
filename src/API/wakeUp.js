import { PROXY } from '../constants';

const wakeUp = () => {
  const endpoint = `${PROXY}wake`;

  return fetch(endpoint, {
    mode: 'cors',
  });
};

export default wakeUp;
