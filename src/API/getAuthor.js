import { parseString } from 'xml2js';
import { BASE_URL, GOODREADS_API_KEY } from '../constants';

const getAuthor = (authorId = '18541') => {
  const endpoint = `${BASE_URL}author/show/${authorId}?format=xml&key=${GOODREADS_API_KEY}`;

  return fetch(endpoint, {
    mode: 'cors',
  })
    .then(
      response => response.text(),
    )
    .then(
      response => {
        let result;
        parseString(response, (err, res) => {
          [result] = res.GoodreadsResponse.author;
        });
        return result;
      },
    );
};

export default getAuthor;
