import { BASE_URL } from '../constants';

const autoComplete = (queryWord = 'Dostoyevski') => {
  const endpoint = `${BASE_URL}book/auto_complete?format=json&q=${queryWord}`;

  return fetch(endpoint, {
    mode: 'cors',
  })
    .then(
      response => response.json(),
    )
    .then(
      response => response,
    );
};

export default autoComplete;
