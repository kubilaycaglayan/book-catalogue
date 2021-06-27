import { BASE_URL, GOODREADS_API_KEY } from '../constants';

const getBook = (bookId = '2788041') => {
  const endpoint = `${BASE_URL}book/show/${bookId}.xml?key=${GOODREADS_API_KEY}`;

  return fetch(endpoint, {
    mode: 'cors',
  })
    .then(
      response => response.json(),
    )
    .then(
      response => {
        const correctedBook = {
          ...response.GoodreadsResponse.book,
          authors: {
            author: response.GoodreadsResponse.book.authors.author.length
              ? response.GoodreadsResponse.book.authors.author
              : [response.GoodreadsResponse.book.authors.author],
          },
        };

        return correctedBook;
      },
    );
};

export default getBook;
