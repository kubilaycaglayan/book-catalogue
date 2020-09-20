import { parseString } from 'xml2js';
import { BASE_URL, GOODREADS_API_KEY } from '../constants';

const authorName = 'Dostoyevski';
const endpoint = new URL(`${BASE_URL}/api/author_url/${authorName}?key=${GOODREADS_API_KEY}`);

fetch(endpoint, {
  mode: 'cors',
})
  .then(
    response => response.text(),
  )
  .then(
    response => {
      parseString(response, (err, res) => ({ err, res }));
    },
  );
