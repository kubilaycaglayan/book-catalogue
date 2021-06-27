import { BASE_URL, GOODREADS_API_KEY } from '../constants';

const getAuthor = (authorId = '18541') => {
  const endpoint = `${BASE_URL}author/show/${authorId}?format=xml&key=${GOODREADS_API_KEY}`;

  return fetch(endpoint, {
    mode: 'cors',
  })
    .then(
      response => response.json(),
    )
    .then(
      response => {
        return response.GoodreadsResponse.author;
      },
    );
};

export default getAuthor;
