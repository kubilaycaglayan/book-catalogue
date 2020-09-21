const fetch = require('node-fetch');
// import { BASE_URL } from '../constants';
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/';

const autoComplete = (queryWord = 'Dostoyevski') => {
  const endpoint = `${BASE_URL}book/auto_complete?format=json&q=${queryWord}`;

  fetch(endpoint, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(
      response => {
        console.log(response);
      },
    );
};

autoComplete();

// export default autoComplete;
