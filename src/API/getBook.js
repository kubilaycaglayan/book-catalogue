import { parseString } from 'xml2js';
import { BASE_URL, GOODREADS_API_KEY } from '../constants';

const getBook = (bookId = '2788041') => {
  const endpoint = `${BASE_URL}book/show/${bookId}.xml?key=${GOODREADS_API_KEY}`;

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
          [result] = res.GoodreadsResponse.book;
        });
        return result;
      },
    );
};

export default getBook;
